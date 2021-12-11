import { DarkBackground } from "../../containers/DarkBackground";
import { Form, FormInput, FormTitle, UnderFormText } from "../Form";
import { MainButton } from "../MainButton";

const LoginComponent = () => {
    return (
        <>
            <DarkBackground>
                <Form>
                    <FormTitle>Login</FormTitle>
                    <FormInput 
                        placeholder="Username"
                        required
                        type="text"
                    />
                    <FormInput 
                        placeholder="Password"
                        required
                        type="password"
                    />
                        <MainButton>Login</MainButton>
                    <UnderFormText to="/register">
                        You don't have an account yet? Register here!
                    </UnderFormText>
                </Form>
            </DarkBackground>
        </>
    )
}

export default LoginComponent;