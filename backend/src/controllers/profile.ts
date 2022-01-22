import { Response } from "express";
import { IGetUserAuthInfoRequest } from "../middleware/tokenCheck";
import User, { IUser } from "../models/user";
import isEmailValid from "../utils/isEmailValid";
export const updateProfile = (req: IGetUserAuthInfoRequest, res: Response) => {
    const data = req.body.data as IUser;
    if (!data || !data.fullName || !data.email || !data.imageURL) {
        res.status(400).send({ message: "please provide all parameters" });
        return;
    }
    if (!isEmailValid(data.email)) {
        res.status(400).send({ message: "email is invalid" });
        return;
    }
    User.findById(req.user.id)
        .then(async (user: IUser) => {
            user.fullName = data.fullName;
            user.imageURL = data.imageURL;
            user.email = data.email;
            await user.save();
            res.send({ message: "success" });
            return;
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log(error);
            return;
        });
};
