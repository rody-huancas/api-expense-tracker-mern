import { Router } from "express";
import { getAllCategories } from "../controllers/categories.js";

const routes = Router();

routes.get("/categories", getAllCategories);

export default routes;
