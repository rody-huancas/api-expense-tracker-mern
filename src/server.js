import "dotenv/config";
import express from "express";
import cors from "cors";
// routes
import routesCategories from "./routes/route.js";
// db
import { connectDB } from "./config/database.js";

const PORT = process.env.PORT || 4001;
const app = express();

connectDB();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/api", routesCategories);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
