import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema(
  {
    scheduleItem: {
      type: String,
      required: true,
    },
    trainDay: {
      type: String,
      required: true,
    },
    TrainTime: {
      type: Date,
      required: true,
    },
    trainer: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Schedule', scheduleSchema);
