import mongoose from 'mongoose';
import User from '../models/userModel';
import Follow from '../models/follower';
import  comment  from '../models/comments';
import  post  from '../models/postmodel';
import like from '../models/likes';

// Connect to MongoDB
const db_connect=()=>{

mongoose.connect('mongodb://localhost:27017/instagram', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    User.createCollection();
    Follow.createCollection();
    comment.createCollection();
    like.createCollection();
    post.createCollection();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
}

export {db_connect};
