import mongoose from "mongoose";

export interface IComment extends mongoose.Document {
    date: string | number | Date;
    content: string;
    createdAt: Date;
    createdBy: mongoose.Types.ObjectId;
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
        type: mongoose.Types.ObjectId,
        ref: "User",
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
                type: mongoose.Types.ObjectId,
                ref: "User",
            },
        },
    ],
});

export default commentSchema;
export const Comment = mongoose.model<IComment>("Comment", commentSchema);
