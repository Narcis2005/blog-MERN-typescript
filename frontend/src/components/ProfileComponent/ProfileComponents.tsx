import styled from "styled-components";
import { DarkGray, red } from "../../utils/colors";
import { FormInput } from "../Form";
import { MainButton } from "../MainButton";

export const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    background: ${DarkGray};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em 0;
`
export const ImageContainer = styled.div`
    width: 300px;
    height: 300px;
    margin: 2em 0;
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
`
export const TextContainer = styled.div`
    width: max(300px, 60%);
    box-shadow: rgb(0 0 0 / 60%) 0px 0px 30px;
    padding: 3em 2em;
`
export const Title = styled.h1`
    margin-left: 5px;
    padding: 5px;
    margin-bottom: 10px;
`
export const BasicText = styled.p`
    padding: 5px;
    
`
export const EditButton = styled(MainButton)`
    /* @media (max-width: 960px){
        width: 300px
    } */
   
`
export const LogoutButton = styled(MainButton)`
    background: ${red};
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    width: 50%;
    padding: 5%;
    @media (max-width: 960px){
        flex-direction: column;
        gap: 20px;
        width: 70%;
    }
`

export const Form = styled.form`
    box-shadow: rgb(0 0 0 / 60%) 0px 0px 30px;
    padding: 3em 5em;
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
    
    

`
export const EditContainer = styled.div`
    width: max(300px, 50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled(FormInput)`
    /* display: inline-block; */
    flex-grow: 1;
`

export const Label = styled.label`
    margin-right: 1.5em;
    flex-shrink: 0;
    flex-basis: 100%;
`