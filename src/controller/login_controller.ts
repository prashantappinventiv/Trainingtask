import {Request,Response} from 'express'
import User from '../model/sign_model'
import * as dotenv from 'dotenv';
import session from './session_controller';

dotenv.config();

import jwt from "jsonwebtoken"
const SECRET_KEY = process.env.SECRET_KEY

const auth=async(req:Request,res:Response)=>{
    try{
        const {email,password}=req.body;

    //    if(!email||password)
    //    {
    //     return res.status(400).json({error:"email and password are required"})
    //    }

       const user=await User.findOne({email});
       
       if(user.password==password)
       {
        const accesstoken=jwt.sign({id:user._id},SECRET_KEY,{expiresIn:'10d'})
        // accessToken , userId , startDate , endDate, isActive
        // createSession(a,u,s,true);
        return res.status(200).json(`log in successfully,${accesstoken}`)
       
       }
       else{
        res.status(401).json({error:"wrong password"})
       }
       await User.findByIdAndUpdate(user._id, { isActive: true });

    const accessToken = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '10d' });
    return res.status(200).json({ message: "Login successful", accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }

  

}
export default auth;