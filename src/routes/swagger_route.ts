import router from 'express'
import express from 'express'
import { Request,Response } from 'express'
const path=router()
path.get('/swagger',(req:Request,res:Response)=>{
    res.json("this is my swagger creation")
})
export default path