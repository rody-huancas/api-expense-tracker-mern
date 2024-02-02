import Transactions from "../models/Transaction.js";

export const getLabels = async (req, res) => {
  Transactions.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "categories_info",
      },
    },
    {
      $unwind: {
        path: "$categories_info",
        preserveNullAndEmptyArrays: true,
      },
    },
  ])
    .then((result) => {
      let data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info ? v.categories_info["color"] : null,
          }
        )
      );
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json("Lookup Collection Error");
    });
};
