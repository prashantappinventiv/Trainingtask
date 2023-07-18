import mongoose, { Document, Schema } from 'mongoose';


enum Status {
    Accept = 'accept',
    Reject = 'reject',
    Pending = 'pending',
  }
// Define the User interface
interface Follow extends Document {
  username: string;
  email: string;
  password: string;
  followers: {
    user: Follow['_id'];
    followedAt: Date;
  }[];
  following: {
    user: Follow['_id'];
    followedAt: Date;
  }[];
  createdAt: Date;
}

// Define the User schema
const followerSchema: Schema<Follow> = new Schema<Follow>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      followedAt: { type: Date, default: Date.now },
    },
  ],
  following: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      followedAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Follow = mongoose.model<Follow>('Follow', followerSchema);

export default Follow;

