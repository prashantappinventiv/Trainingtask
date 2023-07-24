import {Request,Response} from "express"
import { userFetch } from "../model/Fetch_model"
import User from "../model/sign_model";

export const user_detail=async(req:Request,res:Response)=>{
try{
    console.log("my name is slim");
    
    const {email}=req.body;
    //console.log(email,'-------------SHIVAM SINGH -----------');
    
    const user=await User.find({email:email})

if(!user)
{
    return res.status(404).json({message:'User not found'})
}
res.json(user)
}
catch(err){
    res.status(500).json({message:"server error"})
}
}