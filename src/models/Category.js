import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    type: {
      type: String,
      default: "Investment",
    },
    color: {
      type: String,
      default: "#FCBE44",
    },
  },
  {
    timestamps: true,
  }
);

const Categories = mongoose.model("categories", categorySchema);
export default Categories;
