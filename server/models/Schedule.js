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
    seats: {
      available: {
        type: Number,
        required: true,
        default: 20,
      },
      reserved: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    price: {
      type: Number,
      required: true,
    },
    classes: {
      type: Array,
    },
    users: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Schedule', scheduleSchema);
