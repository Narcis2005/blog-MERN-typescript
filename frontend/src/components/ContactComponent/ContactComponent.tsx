import { useState } from "react";
import { DarkBackground } from "../../containers/DarkBackground";
import { FormInput, Form, FormTextarea, FormTitle } from "../Form";
import { MainButton } from "../MainButton";
import React from "react";

const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((oldData) => {
            return { ...oldData, [e.target.name]: e.target.value };
        });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <>
            <DarkBackground>
                <Form onSubmit={handleSubmit}>
                    <FormTitle>Contact Me</FormTitle>
                    <FormInput type="text" required placeholder="Your name" name="name" onChange={handleChange} />
                    <FormInput type="email" required placeholder="Your email" name="email" onChange={handleChange} />
                    <FormInput type="text" required placeholder="Subject" name="subject" onChange={handleChange} />
                    <FormTextarea required placeholder="Message" name="message" onChange={handleChange}></FormTextarea>
                    <MainButton>Send</MainButton>
                </Form>
            </DarkBackground>
        </>
    );
};

export default ContactComponent;
