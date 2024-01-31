import Categories from "../models/Category.js";

export const getAllCategories = async (req, res) => {
  const data = await Categories.find({});
  let filter = await data.map((v) =>
    Object.assign({}, { type: v.type, color: v.color })
  );
  res.send(filter);
};
