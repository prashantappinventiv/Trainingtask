import {Request,Response} from 'express'
import User from '../model/sign_model'

export const signin=async(req:Request,res:Response)=>{
    try{
        User.create(req.body).then((saveData)=>{
            res.status(201).send(saveData)
        }).catch((error)=>{
            console.log(error)
        })
    }
    catch(error){
        console.log(error,'inserting user gives and error')
        res.status(500).json({message:"invalid user"})
    }

};
export default signin;
