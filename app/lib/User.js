import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email address'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  role: {
    type: String,
    required: [true, 'Please provide role'],
    trim: true,
    enum: {
      values: ['host', 'pro'],
      message: 'Role must be either "host" or "pro"',
    },
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
