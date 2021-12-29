import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user";
dotenv.config();
const SECRET_JWT = process.env.SECRET_JWT;

const sendToken = (id: string, username:string, imageURL:string):string => {
    const token = jwt.sign({
        id: id,
        username: username,
        imageURL: imageURL
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
        .then(user => {
            if (user){
                if(user.password === password){
                    res.status(200).json({token: sendToken(user._id, user.username, user.imageURL), imageURL: user.imageURL, username: user.username, id: user._id})
                    return;
                }
                res.status(401).json({
                    message: "Wrong password"
                })
                return;
            }
            res.status(404).send({
                message: "Account doesn't exists"
            })
        })
        .catch(error => {
            res.status(500).send(error);
        })

      
}

export const GetUser =  (req:Request, res:Response) => { 
    const token = req.query.token as string;
    if(!token){
        res.status(400).send({
            message: "Please provide the token"
        })
        return;
    }
    try {
        const user = jwt.verify(token, SECRET_JWT)
        res.status(200).send(user)
    } catch (error) {
        res.status(401).send(error)
    }
}


export const Register = (req:Request, res:Response) => { 
    const username = req.body.username as string;
    const email = req.body.email as string;
    const password = req.body.password as string;
    if(!username || !email || !password){
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

