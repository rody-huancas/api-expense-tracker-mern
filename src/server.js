import express from "express";
import cors from "cors";
// routes
import routesCategories from "./routes/route.js";

const PORT = 4001;
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/api", routesCategories);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
