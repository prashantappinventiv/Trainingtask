import mongoose, { Document,model, Schema } from 'mongoose';

interface Comments extends Document {
    post_id: Comments['_id'];  
    user_id:Comments['_id'];
    content:String;
    created_at:Date;
    updated_at:Date;
}

const CommentSchema = new Schema<Comments>({
  post_id:[{
         type: Schema.Types.ObjectId, ref: 'Post' 
  }
],

user_id:[{
    type:Schema.Types.ObjectId,ref:'User'
}
],

content:{
    type:String,
    required:true
},


created_at: {
   type: Date,
   default: Date.now,
  },

updated_at: {
    type: Date,
    default: Date.now,
    },
})
// export default Comments;

 const comment =mongoose. model<Comments>('Comment', CommentSchema)
//export defaultcomments model<Comments>('Comments', CommentSchema);
export default comment;

