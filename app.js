const express=require('express');
const port=3000;
const app=express();
const studentRouter=require("./student")
//const Student=require("../student")

//we need to register the router
app.use('/',studentRouter);
app.use('/',studentRouter);
app.use('/',studentRouter);
app.use('/',studentRouter)
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
})






