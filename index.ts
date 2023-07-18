import express from "express";
import dotenv from 'dotenv';
import { db_connect } from "./db_connection/db";

const app=express();
dotenv.config();
const port=process.env.PORT;
db_connect();
app.use(express.json())

app.listen(port,()=>{
    console.log(`listeneing at http://localhost:${port}`)
})

    