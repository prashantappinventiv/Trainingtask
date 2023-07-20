// import express from "express";
// import dotenv from 'dotenv';
// //import router from './routes/user_route'
// import { db_connect } from "./db_connection/db";
// import signin from './controller/user_controller'
// import {login} from './controller/login_controller'

// const app=express();
// dotenv.config();
// const port=process.env.PORT;
// db_connect();
// app.use(express.json())
// //app.use('/api',router)
// app.use('/auth' , singinroute)
// app.use('/login',login)

// app.listen(port,()=>{
//     console.log(`listeneing at http://localhost:${port}`)
// })

    
import express from "express";
import dotenv from 'dotenv';
import { db_connect } from "./db_connection/db";
import AuthRouter from "./routes/user_route";

const app = express();
dotenv.config();
const port = process.env.PORT;
db_connect();
app.use(express.json());

// Assuming you have a separate file for signin routes named 'signinRoute.ts'
// Import it and use it as middleware for '/auth' route


app.use('/auth', AuthRouter);
// The '/login' route should use the 'login' controller directly

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
