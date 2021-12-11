// import { ContactContainer} from "./ContactComponents";
import { useState } from "react";
import { DarkBackground } from "../../containers/DarkBackground";
import { FormInput, Form, FormTextarea, FormTitle } from "../Form";
import { MainButton } from "../MainButton";
const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const handleChange = (e:any) => {
        setFormData(oldData => {return {...oldData, [e.target.name]:e.target.value}})
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>
            <DarkBackground>
                <Form onSubmit={handleSubmit}>
                    <FormTitle>Contact Me</FormTitle>
                    <FormInput 
                        type="text"
                        required
                        placeholder="Your name"
                        name="name"
                        onChange={handleChange}
                    />
                     <FormInput 
                        type="email"
                        required
                        placeholder="Your email"
                        name="email"
                        onChange={handleChange}
                    />
                     <FormInput 
                        type="text"
                        required
                        placeholder="Subject"
                        name="subject"
                        onChange={handleChange}
                    />
                    <FormTextarea
                        required
                        placeholder="Message"
                        name="message"
                        onChange={handleChange}
                    >
                    </FormTextarea>
                    <MainButton>Send</MainButton>
                </Form>
            </DarkBackground>
        </>

    )
}

export default ContactComponent;