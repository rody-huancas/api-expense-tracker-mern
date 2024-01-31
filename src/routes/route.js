import { Router } from "express";
import { createCategory, getAllCategories } from "../controllers/categories.js";
import {
  createTransaction,
  deleteTransaction,
  getAllTransactions,
} from "../controllers/transaction.js";
import { getLabels } from "../controllers/labels.js";

const routes = Router();

// categorias
routes.get("/categories", getAllCategories);
routes.post("/categories", createCategory);

// transactions
routes.get("/transactions", getAllTransactions);
routes.post("/transactions", createTransaction);
routes.delete("/transactions", deleteTransaction);

// labels
routes.get("/labels", getLabels);

export default routes;
