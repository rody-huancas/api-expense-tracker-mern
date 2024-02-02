import Transactions from "../models/Transaction.js";

export const getAllTransactions = async (req, res) => {
  let data = await Transactions.find({});
  return res.json(data);
};

export const createTransaction = async (req, res) => {
  if (!req.body)
    return res.status(400).json({ error: "Post HTTP dat not provided" });
  const { name, type, amount } = req.body;

  const create = await Transactions.create({
    name,
    type,
    amount,
    date: Date(),
  });

  const data = await create.save();

  res.json(data);
};

export const deleteTransaction = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Request body not found" });
    }

    const result = await Transactions.deleteOne(req.body);

    if (result.deletedCount > 0) {
      return res.json("Record deleted successfully!");
    } else {
      return res.json("No record found to delete");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Error while deleting transaction record");
  }
};
