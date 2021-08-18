import mongoose from 'mongoose';

const numberSchema = new mongoose.Schema({
  number: Number,
  reg_time: { type: Date, default: Date.now },
});

const FiNumber = mongoose.model('number', numberSchema);

export default FiNumber;
