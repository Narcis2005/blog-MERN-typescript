import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User, { IUser } from "../models/user";
dotenv.config();
const SECRET_JWT = process.env.SECRET_JWT;

export interface IGetUserAuthInfoRequest extends Request {
    user: IUser;
}

const check = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const token = header?.split(" ")[1];
    if (!token) {
        return res.status(401).send({
            message: "Please provide a token",
        });
    }
    try {
        const user = jwt.verify(token, SECRET_JWT) as IUser;
        User.findById(user.id)
            .then((foundUser: IUser) => {
                req.user = foundUser;
                next();
                return;
            })
            .catch((error) => {
                res.status(500).send(error);
                return;
            });
    } catch (error) {
        return res.status(401).send({
            message: "The session ended. Please reconnect",
        });
    }
};

export default check;
