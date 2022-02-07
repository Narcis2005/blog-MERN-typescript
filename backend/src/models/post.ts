import mongoose from "mongoose";
import commentSchema, { IComment } from "./comment";

//Post schema

interface IPost extends mongoose.Document {
    title: string;
    description: string;
    content: string;
    imageURL: string;
    slug: string;
    createdAt: Date;
    tags: string[];
    category: string;
    createdBy: {
        userId: mongoose.Types.ObjectId;
        username: string;
    };
    comments?: IComment[];
}

const postSchema = new mongoose.Schema<IPost>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    createdBy: {
        userId: mongoose.Types.ObjectId,
        username: String,
    },
    comments: [commentSchema],
});

const Post = mongoose.model<IPost>("post", postSchema);
export default Post;
