import { Link } from "react-router-dom";
import styled from "styled-components";
import { DarkGray } from "../../utils/colors";

export const Form = styled.form`
max-width: 85%;
margin: 2em 0;
display: flex;
flex-direction: column;
align-items: center;
background: ${DarkGray};
padding: 3em;
border-radius: 20px;
box-shadow: rgb(0 0 0 / 50%) 0px 10px 20px;


`
export const FormInput = styled.input`
background: transparent;
width: 300px;
height: 50px;
padding: 15px;
color: white;
border: solid 1px white;
display: block;
margin: 15px 0;
border-radius: 5px;
&::placeholder{
color: white;
}
@media (max-width: 960px) {
width: 230px;
height: 40px;
}
`
export const FormTextarea = styled.textarea`
background: transparent;
border-radius: 5px;
width: 350px;
height: 70px;
padding: 15px;
color: white;
border: solid 1px white;
display: block;
margin: 15px 0;
resize: none;
&::placeholder{
color: white;
}
@media (max-width: 960px) {
width: 250px;
height: 60px;
}
`
export const UnderFormText = styled(Link)`
    margin-top: 30px;
    opacity: 0.8;
    max-width: 300px;
    &:hover{
        opacity: 1;
    }
`

export const FormTitle = styled.h1`
    padding: 10px 0;
`
interface IMessageContainer {
    background: string;
    display: string;
}
export const MessageContainer = styled.div<IMessageContainer>`
    background: ${({background}) => background};
    padding: 10px 20px;
    margin: 10px 0;
    display: ${({display}) => display};
`
export const Message = styled.p`

`