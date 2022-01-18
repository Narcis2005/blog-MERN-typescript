import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { DarkBackground } from "../../containers/DarkBackground";
import { RootState } from "../../redux/store";
import api from "../../utils/api";
import { FormInput,Form, UnderFormText, FormTitle, MessageContainer, Message } from "../Form";
import { MainButton } from "../MainButton";

const RegisterComponent = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        fullName: ""
    })
    const auth = useSelector((state:RootState)=> state.auth)
    const [message, setMessage] = useState({error: false, message: "", loading: true})
    const handleChange = (e:any) => {
        setFormData(oldData => {return {...oldData, [e.target.name]:e.target.value}})
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        api.post("/auth/register",{...formData, email: formData.email.toLowerCase()})
            .then(response => {
                setMessage({error: false, message: response.data.message, loading: false})
            })
            .catch(error => {
                setMessage({error: true, message: error.response.data.message, loading: false} )
            })
    }
    return (
        <>
        {/* if user is authentificated redirect to homepage */}
        {auth.isAuthentificated && (
            <Navigate to="/" />
        )}
            <DarkBackground>
                <Form onSubmit={handleSubmit}>
                    <FormTitle>Register</FormTitle>
                    <MessageContainer background = {message.error ? "darkred" : "green"} display = {message.loading ? "none": "block"}>
                        
                        <Message>{message.message}</Message>
                    </MessageContainer>
                    <FormInput 
                        placeholder="Username"
                        required
                        type="text"
                        onChange={handleChange}
                        name="username"
                    />
                     <FormInput 
                        placeholder="Email"
                        required
                        type="email"
                        onChange={handleChange}
                        name="email"
                    />
                    <FormInput 
                        placeholder="Full name"
                        required
                        type="text"
                        onChange={handleChange}
                        name="fullName"
                    />
                    <FormInput 
                        placeholder="Password"
                        required
                        type="password"
                        onChange={handleChange}
                        name="password"
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