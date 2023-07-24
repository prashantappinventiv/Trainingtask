import {Request,Response} from 'express'
import post from '../model/post'

export const Post=async(req:Request,res:Response)=>{
    try{
        const {user_id,count,content}=req.body;
        

        // autho
        const newPost=new post({
            user_id,
            count,
            content,
        })
        const savedPost=await newPost.save()
        console.log("post created successfully")
        res.status(201).json(savedPost)
       }
    catch(error)
    {
        console.log({error:"invalid user"})
        res.status(500).json({error:'Server Error'})
    }
}
