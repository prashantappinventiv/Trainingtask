import mongoose, { Document, model, Schema } from 'mongoose';

interface Post extends Document {
    post_id: string
    content: String
    createdAt: Date;
    updatedAt: Date;
    user_id: Schema.Types.ObjectId;
}

const postSchema = new Schema<Post>({
    post_id: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

})
const post = mongoose.model<Post>('Post', postSchema)

export default post;