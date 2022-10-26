import styled from "styled-components";
import { DarkGray } from "../../../utils/colors";
import { MainButton } from "../../MainButton";

export const CardContainer = styled.div`
    height: 480px;
    /* width: 400px; */
    width: 30%;
    background-color: ${DarkGray};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 50%) 0px 10px 20px;
    @media (max-width: 1280px) {
        width: 40%;
    }
    @media (max-width: 960px) {
        width: 100%;
    }
`;

export const ImgContainer = styled.div`
    height: 40%;
    width: 100%;
    @media (max-width: 960px) {
        height: 30%;
    }
`;
export const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
    height: 35%;
    width: 100%;
    @media (max-width: 960px) {
        height: 45%;
    }
`;

export const TitleContainer = styled.div`
    margin: 20px;
`;

export const Title = styled.h3`
    font-size: 1.35rem;
`;

export const DescriptionContainer = styled.div`
    max-width: 85%;
    margin: 0;
`;
export const Description = styled.p`
    overflow-wrap: break-word;
`;
export const ButtonCard = styled(MainButton)`
    font-size: 1.3rem;
    font-weight: 700;
    padding: 10px 20px;
    @media (max-width: 960px) {
        font-size: 1.1rem;
        padding: 10px 15px;
    }
`;
export const ButtonContainer = styled.div`
margin-top: 10px;
`;