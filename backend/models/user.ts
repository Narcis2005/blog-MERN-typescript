import mongoose from "mongoose";


//Post schema

export interface IUser extends mongoose.Document {
    username: string;
    password: string;
    email: string;
    imageURL: string;
    createdAt: Date;
    fullName: string;
}

const userSchema = new mongoose.Schema<IUser>({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date(),
        required: true
    },
    fullName:{
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        required: true
    }
});

const User = mongoose.model<IUser>("user", userSchema);
export default User;