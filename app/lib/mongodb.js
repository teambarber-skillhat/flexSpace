import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log(error.message);
  }
}

export default dbConnect;
