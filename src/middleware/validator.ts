import dotenv from 'dotenv';
import {Request,Response,NextFunction} from "express";
import jwt from 'jsonwebtoken'
import session from '../controller/session_controller';

dotenv.config();
const SECRET_KEY=process.env.SECRET_KEY;

export const jwtAuth=(req:Request,res:Response,next:NextFunction)=>{
    
    // token check 
    // validate token 
    // varify jwt
    // sesssion verify
    // session - vlidate Session(token) -> token -> fetch session if not -> return 401 if present -> then validate isActive -> 
    // true -> pass 
    // false -> 401
    try{
        console.log("inside jwt...............")
        const authorization= req.headers.authorization;
        console.log("Au............",authorization);
        if(authorization == null || authorization== ''){
           
         return res.status(401).json("UnAuthorized");
        }
        
        let userData=jwt.verify(authorization,SECRET_KEY)
        
        
        next()
    }
    catch(error)
    {
        res.send(401).json('invalid token');
        console.log({error})
    }
}
 export default jwtAuth