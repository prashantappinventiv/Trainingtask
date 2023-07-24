import express from 'express'
import db from'./src/databse/db'
import dotenv from 'dotenv'
import authRouter from './src/routes/sign_route'
import loginRouter from './src/routes/login_route'
import fetch from './src/routes/fetch_route'
import postCreate_ from './src/routes/post_routes'
import { createComment } from './src/controller/comment_controller'
import Session from './src/routes/session_route'
import { setupSwagger } from './src/swagger'
import path from './src/routes/swagger_route'
import jwtAuth from './src/middleware/validator'

const app=express()
const port=3000;
setupSwagger(app)
db();
dotenv.config()
app.use(express.json())
app.use('/auth',authRouter)

app.use('/login',loginRouter)
app.use('/details',fetch)
app.use('/postcreated',postCreate_)
app.use('/comment_post',createComment)
app.use('/session_table',Session)
app.use('/path',path)

app.listen(port,()=>{
    
    console.log("listening at http")
})