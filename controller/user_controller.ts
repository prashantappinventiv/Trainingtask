import jwt from "jsonwebtoken"
// // //import { Types, Document, Models } from 'mongoose';

// // // const userSchema = new Schema<User>({
// // //     user_id:{
// // //       type:String,
// // //       required:true
// // //     },
// // //     name: {
// // //       type: String,
// // //       required: true,
// // //     },
// // //     email: {
// // //       type: String,
// // //       required: true,
// // //       unique: true,
// // //     },
// // //     password: {
// // //       type: Number,
// // //       required: true,
// // //     },
// // //     createdAt: {
// // //       type: Date,
// // //       default: Date.now,
// // //     },
// // //     updatedAt: {
// // //       type: Date,
// // //       default: Date.now,
// // //     },
// // //     followers: [
// // //       { type: Schema.Types.ObjectId, ref: 'User' },
// // //     ],
// // //     following: [
// // //       { type: Schema.Types.ObjectId, ref: 'User' },
// // //     ],
// // //     posts: [
// // //       { type: Schema.Types.ObjectId, ref: 'Post' },
// // //     ],
// // //   });


// // //   export const Users = mongoose.model<User>('User', userSchema);


// // //   // export default User;



























// // // import { Request, Response } from 'express';
// // // import { User } from '../models/userModel';
// // // import mongoose from 'mongoose';

// // // class UserController {// Controller function for inserting a new user
// // //    async function insertUser(req: Request, res: Response): Promise<void> {
 
// // //     try {
// // //       const {user_id,name,email,password} = req.body;
// // //       // Create a new user document
// // //       const newUsers = new User({
// // //         user_id: user_id,
// // //         name: name,
// // //         email: email,
// // //         password: req.body.password,
// // //         // followers: [], // Add follower IDs if necessary
// // //         // following: [], // Add following IDs if necessary
// // //         // posts: [], // Add post IDs if necessary
// // //         // User
// // //       });
// // //       // User.create({

// // //       // })

// // //       const user = await newUsers.save();

// // //       res.status(201).json({ message: 'User inserted successfully', user });
// // //     } catch (error: any) {
// // //       console.error('Error inserting user:', error);
// // //       res.status(500).json({ message: 'Error inserting user' });
// // //     }
// // //   }
  
// // // }
// // // const userController = new UserController();
// // // export default userController
















// // import { Request, Response } from 'express';
// // import { User } from '../models/userModel';
// // const Joi = require('joi');

// // export const singin =async (req: Request, res: Response) => {
// //   try {
// //     const { user_id, name, email, password } = req.body;
// //     // Create a new user document
// //     const newUser = new User({
// //       user_id,
// //       name,
// //       email,
// //       password,
// //       // followers: [], // Add follower IDs if necessary
// //       // following: [], // Add following IDs if necessary
// //       // posts: [], // Add post IDs if necessary
      

// //     const schema =Joi.object({
// //     username: Joi.string()
// //         .alphanum()
// //         .min(3)
// //         .max(30)
// //         .required(),

// //     password: Joi.string()
// //         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

// //     repeat_password: Joi.ref('password'),

// // })
// //     });

// //     const user = await newUser.save();

// //     res.status(201).json({ message: 'User inserted successfully', user });
// //   } catch (error: any) {
// //     console.error('Error inserting user:', error);
// //     res.status(500).json({ message: 'Error inserting user' });
// //   }
// // }

// //   // Controller function for inserting a new user


// // export default singin








// import { Request, Response } from 'express';
// import { User } from '../models/userModel';

// export const signin = async (req: Request, res: Response) => {
//   try {
//     const { name, password } = req.body;

//     // Check if the user exists in the database
//     const user = await User.findOne({ name });
    

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Compare the provided password with the password in the database
//     if (user.password !== password) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }

//     res.status(200).json({ message: 'Login successfully' });
//   } catch (error: any) {
//     console.error('Error in login:', error);
//     res.status(500).json({ message: 'Error' });
//   }
// };

import { Request, Response } from 'express';
import { User } from '../models/userModel';

export const signin = async (req: Request, res: Response , next : () =>void) => {
  try {
    const { user_id, name, email, password } = req.body;
    console.log(req.body,"12389999999999999999");

    const newUser = new User({
      user_id: user_id,
      name: name,
      email: email,
      password: password,
      // followers: [], // Add follower IDs if necessary
      // following: [], // Add following IDs if necessary
      // posts: [], // Add post IDs if necessary
    });

    

    const user = await newUser.save();
    // const accessToken = jwt.sign({id:user.id},'prashant',{expiresIn:60});

    // res.status(201).send(accessToken);
    // res.status(201).json({ message: 'User inserted successfully', token:accessToken });
  } catch (error: any) {
    console.error('Error inserting user:', error);
    res.status(500).json({ message: 'Error inserting user' });
  }
};

// Controller function for inserting a new user

export default signin;