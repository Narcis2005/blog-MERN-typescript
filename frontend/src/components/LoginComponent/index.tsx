import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { DarkBackground } from "../../containers/DarkBackground";
import { loginUser } from "../../redux/slices/auth";
import { RootState } from "../../redux/store";
import { Form, FormInput, FormTitle, Message, MessageContainer, UnderFormText } from "../Form";
import { MainButton } from "../MainButton";
import React from "react";

const LoginComponent = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser(credentials));
    };
    return (
        <>
            {/* if user is authentificated redirect to homepage */}
            {auth.status === "success" && <Navigate to="/" />}
            <DarkBackground>
                <Form onSubmit={handleSubmit}>
                    <FormTitle>Login</FormTitle>
                    <MessageContainer
                        background={auth.error ? "darkred" : "green"}
                        display={!auth.error ? "none" : "block"}
                    >
                        <Message>{auth && auth.error && auth.error.message}</Message>
                    </MessageContainer>
                    <FormInput
                        placeholder="Username"
                        required
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={credentials.username}
                    />
                    <FormInput
                        placeholder="Password"
                        required
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={credentials.password}
                    />
                    <MainButton>Login</MainButton>
                    <UnderFormText to="/register">You don&apos;t have an account yet? Register here!</UnderFormText>
                </Form>
            </DarkBackground>
        </>
    );
};

export default LoginComponent;
