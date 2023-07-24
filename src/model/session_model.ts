import { Document,Schema } from "mongoose";
import mongoose from "mongoose";

interface Session extends Document{
    _id:String 
    user_id:Number,
    isActive:Boolean,
    login_time:Date,
    logout_time:Date
}

const SessionSchema=new Schema<Session>
user_id:({
    type:mongoose.Schema.ObjectId,
    ref:'sign_model',
    required:'true'

})
isActive:({
    type:Boolean,
    required:'true'
})
lognin_time:({
    type:Date,
    required:'true'
})
logout_time:({
    type:'Date',
    required:'true'
})

const Session=mongoose.model('session',SessionSchema)
export default Session