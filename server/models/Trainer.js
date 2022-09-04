import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema(
  {
    trainer: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    classes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Trainer", trainerSchema);
