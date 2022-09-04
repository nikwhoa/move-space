import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    scheduleItem: {
      type: String,
      required: true,
      unique: true,
    },
    schedule: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SchedulePosts",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Schedule", scheduleSchema);
