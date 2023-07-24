import { Document,Schema } from "mongoose";
import mongoose from 'mongoose'

interface Post extends Document{
    user_id:Number,
    count:Number,
    content:String,
    createdAt:Date
}

const postSchema=new Schema<Post>
user_id:({
    type:mongoose.Schema.ObjectId,
    ref:'sign_model',
    required:'true'

})

count:({
    type:Number,
    required:'false'
})

contet:({
    type:'String',
    required:'true'
})

createdAt:({
    type:'Date',
    Default:Date.now
})
const post=mongoose.model('post',postSchema)
export default post