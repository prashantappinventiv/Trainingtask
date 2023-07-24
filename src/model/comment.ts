import{Document,Schema} from "mongoose"
import mongoose from "mongoose"

interface Comment extends Document{
    post_id:Number,
    content:String,
    createdAt:Date,
    
}

const CommentSchema=new Schema<Comment>({
    post_id:{
        type:mongoose.Schema.ObjectId,
        ref:'Post',
        required:true
    },

    content:{
        type:'String',
        required:true
    },

    createdAt:{
        type:Date,
        Default:Date.now
    },
    
})

const comment=mongoose.model<Comment>('Comment',CommentSchema)
export default comment
