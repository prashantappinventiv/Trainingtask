const express=require('express')

const app=express()

app.use(express.json())

const signupSchema=Joi.object({
    email:Joi.string().email().required(), 
    password:Joi.string().min(3).max(10).required(),
})
app.post('/signup',(req,res)=>{
   const {error,value}=signupSchema.validate(req.body);

   if(error){
    console.log(error)
    return res.send("invalid reqiest")
   }
   res.send("successfully signed up")
})

app.listen(3000,()=>{
    console.log("server is startd")
})