import styled from "styled-components";
import { LightGray } from "../../../utils/colors";

export const CommentContainer = styled.div`
    background: ${LightGray};
    width: 90%;
    min-height: 300px;
    border-radius: 20px;
    display: flex;
    & > * {
        margin: 40px 20px;
    }

`;
export const ProfileContainer = styled.div`
    width: 20%;
    object-fit: cover;
    
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* margin-top: 30px; */
    @media (max-width: 960px) { 
        justify-content: center;
    }

`;
export const ProfileImage = styled.img`
    width: 70%;
    border-radius: 50%;
    object-fit: cover;
    margin-top: 5%;
    @media (max-width: 960px) {  
        width: 100%;
        margin-top: 0;
    }
    
`;
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media (max-width: 960px) { 
        height: auto;
    }

`;
export const Username = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    @media (max-width: 960px) { 
    margin-bottom: 20px;
    font-size: 1.3rem;

    }
`;
export const RightSideComment = styled.div` 
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    /* padding: 30px 50px 30px 0; */
    width: 70%;

`;
export const ButtonsAndDateContainer = styled.div`
    align-self: flex-end;
    display: flex;
    align-items: center;
    & > * {
        margin-right: 10px;
    }
`;
export const CommentDate = styled.p`
    @media (max-width: 960px) { 
        font-size: 14px;
    }
`;

export const CommentButton = styled.button`
    background: ${LightGray};
    border: white 1px solid;
    padding: 5px;
    margin: 0;
    margin-right: 10px;
    cursor: pointer;
`;

export const CommentText = styled.p`
    margin-top: 40px;
    @media (max-width: 960px) { 
        font-size: 14px;
        align-self: center;
        
    }
`;