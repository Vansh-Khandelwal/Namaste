import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: String,
    likes: [],
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
}, {
    timestamps: true
})

const PostModel = mongoose.model("Post", postSchema);
export default PostModel;