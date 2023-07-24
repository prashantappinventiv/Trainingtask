
import mongoose, {Document,Schema} from "mongoose";

interface User extends Document{
    
    name:string,
    email:string,
    age:number,
    mobile_no:number,
    password:number
}

const userschema=new Schema<User>({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    mobile_no:{
        type:Number,
        required:true
    }


});

const User=mongoose.model<User>('User',userschema)
export default User
