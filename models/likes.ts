import mongoose, { Document, model, Schema } from 'mongoose';

interface Like extends Document {
    post_id: Like['_id'];
    user_id: Like['_id'];
    created_at: Date;
    updated_at: Date;
}

const likeSchema = new Schema<Like>({
    post_id: [{
        type: Schema.Types.ObjectId, ref: 'Post'
    }
    ],

    user_id: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }
    ],
    created_at: {
        type: Date,
        default: Date.now,
    },

    updated_at: {
        type: Date,
        default: Date.now,
    }

})

const like = mongoose.model<Like>('Like', likeSchema);
export default like;