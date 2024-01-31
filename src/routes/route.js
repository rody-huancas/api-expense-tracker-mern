import { Router } from "express";
import { createCategory, getAllCategories } from "../controllers/categories.js";

const routes = Router();

routes.get("/categories", getAllCategories);
routes.post("/categories", createCategory);

export default routes;
