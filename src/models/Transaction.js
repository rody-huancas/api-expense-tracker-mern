import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "Anonymous",
    },
    type: {
      type: String,
      default: "Investment",
    },
    amopint: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Transactions = mongoose.model("transactions", transactionSchema);
export default Transactions;
