import { Request ,Response} from "express";
import comment from '../model/comment'

export const createComment=async(req:Request,res:Response)=>{
    try{
        const {post_id,content}=req.body;
        const newComment=new comment({
            post_id,
            content
        })
        const savedComment=await newComment.save()
        console.log("comment created successfully")
        res.status(201).json(savedComment)
        }
        catch(error)
        {
            console.log({error:'Invalid user'})
            res.status(501).json({error:'internal server error'})
        }


}