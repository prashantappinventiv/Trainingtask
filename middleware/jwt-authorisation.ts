import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
export const jwtAuthorisation = (req:Request, res:Response, next:NextFunction)=>{
    let token = req.headers.authorization;
    try{
        let userData = jwt.verify(token,'prashant')
        console.log(userData,"123");
        
        next()
    }catch(e){
        res.send("NOT AUTHORISED")
    }
    
}