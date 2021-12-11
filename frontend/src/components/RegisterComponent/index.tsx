import { useState } from "react";
import { DarkBackground } from "../../containers/DarkBackground";
import { FormInput,Form, UnderFormText, FormTitle } from "../Form";
import { MainButton } from "../MainButton";

const RegisterComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
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
                    <FormTitle>Register</FormTitle>
                    <FormInput 
                        placeholder="Username"
                        required
                        type="text"
                        onChange={handleChange}
                    />
                     <FormInput 
                        placeholder="Email"
                        required
                        type="email"
                        onChange={handleChange}
                    />
                    <FormInput 
                        placeholder="Password"
                        required
                        type="password"
                        onChange={handleChange}
                    />
                        <MainButton>Register</MainButton>
                    <UnderFormText to="/login">
                        You aleardy have an account? Login here!
                    </UnderFormText>
                </Form>
            </DarkBackground>
        </>
    )
}
export default RegisterComponent;