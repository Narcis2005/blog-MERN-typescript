import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { IUser } from "../models/user";
dotenv.config();
const SECRET_JWT = process.env.SECRET_JWT;

export interface IGetUserAuthInfoRequest extends Request {
    user: IUser;
}

const check = (req:IGetUserAuthInfoRequest, res:Response, next:NextFunction) => {
    const header = req.headers["authorization"] as string;
    const token = header?.split(" ")[1];
        if(!token){
        return res.status(401).send({
            message: "Please provide a token"
        })
    }
    try {  
        const user = jwt.verify(token, SECRET_JWT) as IUser;
        req.user = user;
        next();
        return;
    } catch (error) {
            return res.status(401).send({
                message: "Token is not valid"
            })
    }
}

export default check;
