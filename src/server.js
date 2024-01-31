import "dotenv/config";
import express from "express";
import cors from "cors";
import routesCategories from "./routes/route.js";
import { connectDB } from "./config/database.js";
import seedData from "./middlewares/seedData.js";

const PORT = process.env.PORT || 4001;
const app = express();

connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Middleware de siembra (seed)
seedData();

app.use("/api", routesCategories);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
