import * as mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  id: { type: String },
  createdAt: { type: String },
  updatedAt: { type: String },
});

export type Wallet = mongoose.InferSchemaType<typeof walletSchema>;
export const Wallet = mongoose.model("Wallet", walletSchema);
