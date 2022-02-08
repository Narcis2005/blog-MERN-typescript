/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
interface IFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}
export const contactController = (req: Request, res: Response) => {
    const formData = req.body.formData as IFormData;
    if (!formData) {
        res.status(401).send({ message: "Specify all parameters" });
        return;
    }
    if (!formData.name) {
        res.status(401).send({ message: "Specify the name" });
        return;
    }
    if (!formData.subject) {
        res.status(401).send({ message: "Specify the subject" });
        return;
    }
    if (!formData.email) {
        res.status(401).send({ message: "Specify the email" });
        return;
    }
    if (!formData.message) {
        res.status(401).send({ message: "Specify the message" });
        return;
    }
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    const messageToSend = {
        to: process.env.EMAIL_TO_SEND,
        from: "Astronomy Blog",
        subject: "New message from Astronomy blog",
        text: `From: ${formData.name} \n email: ${formData.email} \n subject: ${formData.subject} \n message:${formData.message}`,
    };

    transporter.sendMail(messageToSend, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send(error);
            throw error;
        }
        res.send({ message: "Email sent succesfully", info });
    });
};
