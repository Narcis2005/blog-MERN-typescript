import mongoose from "mongoose";


//Post schema

interface post {
    title: string;
    description: string;
    imageURL: string;
    slug: string;
    createdAt: Date;
}

const postSchema = new mongoose.Schema<post>({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imageURL:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date(),
        required: true
    }
});

const Post = mongoose.model<post>("post", postSchema);
export default Post;