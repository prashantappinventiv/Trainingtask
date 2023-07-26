import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken'
import session from '../model/session_model';
import client from '../redis/redis.client';
export const session_check=async(req:Request,res:Response,next:NextFunction)=>{
    const SECRET_KEY="appinventiv";
    const token=req.headers.authorization;
    let decode;
    try{
        decode=jwt.verify(token,SECRET_KEY)
    }catch(err){
        res.send('token is not valid or expired')
        return ;
    }
    try{
        const redisData=await client.get(`${decode?._id}`)
        if(!(redisData==='true')){
            console.log('cache  miss')
            const data=await session.find({
                user_id:decode._id,
                isActive:true,
            })
            if(data.length>0)
            {
                next()
            }
            else{
                res.send("authentcation error")
            }
        }
    }
    catch(err){
        res.send('error')
    }
}