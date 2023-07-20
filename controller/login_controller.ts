import { Request, Response } from 'express';
import { User } from '../models/userModel';
import jwt from "jsonwebtoken"

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;
    console.log(req.body)
    // Check if the user exists in the database
    const user = await User.findOne({ name });
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    
    else if (user.password === password) {
      const accessToken = jwt.sign({id:user._id},'prashant',{expiresIn:60});

    res.status(201).send(accessToken);
    
        
      res.status(200).json({ message: 'Login successfully' });
      }

      else{

      res.status(400).json({ error: 'Invalid' });
      }
  
    } catch (error: any) {
      console.error('Error in login:', error);
      res.status(500).json({ message: 'Error' });
    }
  };