import {Request,Response} from 'express'
import session_model from '../model/session_model'

 const session=async(req:Request,res:Response)=>{
    try{
        
        const {user_id,isActive}=req.body;
        const newSchema=new session_model({
            user_id,
            isActive,
           
        })
       
        const savedsessionn=await newSchema.save()
        res.status(201).json(savedsessionn)
        console.log("session created")
    }
    catch(error){
        console.log({error:"your session has been expired"})
        res.status(500).json({error:'server error'})
    }
}
export default session