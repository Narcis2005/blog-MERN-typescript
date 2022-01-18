import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User, { IUser } from "../models/user";
import { IGetUserAuthInfoRequest } from "../middleware/tokenCheck";
dotenv.config();
const SECRET_JWT = process.env.SECRET_JWT;

const sendToken = (id: string):string => {
    const token = jwt.sign({
        id: id
    }, SECRET_JWT, { expiresIn: '1h' })
    return token;
}

export const Login = async (req:Request, res:Response) => {
    const username = req.body.username as string;
    const password  = req.body.password as string;
    if(!username || !password) {
        res.status(400).send({
            message: "Please provide all params"
        })
        return;
    }
    User.findOne({username: username})
        .then((user:IUser) => {
            if (user){
                if(user.password === password){
                    res.status(200).json({
                        token: sendToken(user._id),
                        imageURL: user.imageURL,
                        username: user.username,
                        email: user.email,
                        fullName: user.fullName,
                        id: user._id,
                        
                    })
                    return;
                }
                res.status(401).json({
                    message: "Wrong password"
                })
                return;
            }
            res.status(404).send({
                message: "Account doesn't exist"
            })
        })
        .catch(error => {
            res.status(500).send(error);
        })

      
}

export const GetUser =  (req:IGetUserAuthInfoRequest, res:Response) => { 
    User.findById(req.user.id)
        .then((user: IUser) => {
            if (!user) {
                res.status(404).send({
                    message: "Account doesn't exists"
                })
                return;
            }
            res.send({
                imageURL: user.imageURL,
                username: user.username,
                email: user.email,
                fullName: user.fullName,
                id: user._id,
            })
            return;
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log(error)
            return;
        })
   
}


export const Register = (req:Request, res:Response) => { 
    const username = req.body.username as string;
    const email = req.body.email as string;
    const password = req.body.password as string;
    const fullName =  req.body.fullName as string;
    if(!username || !email || !password || !fullName){
        res.status(400).send({
            message: "Please provide all params"
        })
        return;
    }
    User.findOne({username: username})
        .then(user => {
            if(user) {
                res.status(409).send({
                    message: "Username aleardy exists"
                })
                return;
            }
            const newUser = new User();
            newUser.username = username;
            newUser.email = email;
            newUser.password = password;
            newUser.fullName = fullName;
            newUser.save()
                .then(savedUser => {
                    res.send({
                        message: "Account created succesfully"
                    })
                })
                .catch(error => {
                    res.status(500).send(error)
                })
        })
        .catch(error => {
            res.status(500).send(error)
        })
}

