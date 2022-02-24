/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { DarkBackground } from "../../containers/DarkBackground";
import { FormInput, Form, FormTextarea, FormTitle, MessageContainer, InputLabelContainer } from "../Form";
import { MainButton } from "../MainButton";
import React from "react";
import api from "../../utils/api";
import { green, red } from "../../utils/colors";
import { Label } from "../ProfileComponent/ProfileComponents";
import handleAxiosError from "../../utils/handleAxiosError";
interface IResult {
    message: string;
    info?: any;
}
interface ICall {
    error: any;
    status: "idle" | "loading" | "success" | "failed";
    result: IResult | null;
}
const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [call, setCall] = useState<ICall>({
        status: "idle",
        result: null,
        error: null,
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((oldData) => {
            return { ...oldData, [e.target.name]: e.target.value };
        });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCall({ ...call, status: "loading" });
        api.post<IResult>("/contact", { formData: formData })
            .then((result) => {
                setCall({ error: null, status: "success", result: result.data });
            })
            .catch((error: Error) => {
                const err = handleAxiosError(error);
                //handled by axios interceptor
                if (err === "return") return;
                setCall({ status: "failed", result: null, error: err });
            });
    };
    return (
        <>
            <DarkBackground>
                <Form onSubmit={handleSubmit}>
                    <MessageContainer
                        background={call.status === "failed" ? red : call.status === "success" ? green : "black"}
                        display={call.status === "idle" ? "none" : "block"}
                    >
                        {call.status === "success"
                            ? call.result?.message
                            : call.status === "failed"
                            ? call.error
                            : "loading"}
                    </MessageContainer>

                    <FormTitle>Contact Me</FormTitle>
                    <InputLabelContainer>
                        <Label htmlFor="name">Full Name</Label>
                        <FormInput type="text" required placeholder="Your name" name="name" onChange={handleChange} />
                    </InputLabelContainer>
                    <InputLabelContainer>
                        <Label htmlFor="email">Email</Label>

                        <FormInput
                            type="email"
                            required
                            placeholder="Your email"
                            name="email"
                            onChange={handleChange}
                        />
                    </InputLabelContainer>

                    <InputLabelContainer>
                        <Label htmlFor="subject">Subject</Label>

                        <FormInput type="text" required placeholder="Subject" name="subject" onChange={handleChange} />
                    </InputLabelContainer>
                    <InputLabelContainer>
                        <Label htmlFor="message">Message</Label>

                        <FormTextarea
                            required
                            placeholder="Message"
                            name="message"
                            onChange={handleChange}
                        ></FormTextarea>
                    </InputLabelContainer>

                    <MainButton>Send</MainButton>
                </Form>
            </DarkBackground>
        </>
    );
};

export default ContactComponent;
