import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
  user_id:string,
  name: string;
  email: string;
  password: number;
  createdAt: Date;
  updatedAt: Date;
  followers: User['_id'][];
  following: User['_id'][];
  posts: Schema.Types.ObjectId[];
}

const userSchema = new Schema<User>({
  user_id:{
    type:String,
    required:true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  followers: [
    { type: Schema.Types.ObjectId, ref: 'User' },
  ],
  following: [
    { type: Schema.Types.ObjectId, ref: 'User' },
  ],
  posts: [
    { type: Schema.Types.ObjectId, ref: 'Post' },
  ],
});



const User = mongoose.model<User>('User', userSchema);


export default User;
