import mongoose from "mongoose";

export interface IComment extends mongoose.Document {
    content: string;
    createdAt: Date;
    createdBy: {
        username: string;
        imageURL: string;
        userId: mongoose.Types.ObjectId;
    };
    replies?: [IComment];
}
const commentSchema = new mongoose.Schema<IComment>({
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
        required: true,
    },
    createdBy: {
        type: {
            userId: mongoose.Types.ObjectId,
            username: String,
            imageURL: String,
        },
        required: true,
    },
    replies: [
        {
            content: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: new Date(),
                required: true,
            },
            createdBy: {
                type: {
                    userId: mongoose.Types.ObjectId,
                    username: String,
                    imageURL: String,
                },
                required: true,
            },
        },
    ],
});

export default commentSchema;
