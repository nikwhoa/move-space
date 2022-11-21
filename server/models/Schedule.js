import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema(
  {
    scheduleItem: {
      type: String,
      required: true,
      unique: true,
    },
    TrainTime: {
      type: Date,
      required: true,
    },
    users: {
      type: Array,
    },
  },
  { timestamps: true },
);


export default mongoose.model('Schedule', scheduleSchema);
