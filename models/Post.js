import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            Type: String,
            required: true,
        },
        firstName: {
            Type: String,
            required: true,
        },
        lastName: {
            Type: String,
            required: true,
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            Type: Map,
            of: Boolean,
        },
        comments: {
            Type: Array,
            default: [],
        }
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;