import { Document,Schema } from "mongoose"
import mongoose from "mongoose"

interface Login extends Document{
    email:string,
    password:Number
}

const loginSchema=new Schema <Login>({
email:{
    type:String,
    required:true
},

password:{
    type:Number,
    required:true
}
})
const login=mongoose.model<Login>('Login',loginSchema)
export default login