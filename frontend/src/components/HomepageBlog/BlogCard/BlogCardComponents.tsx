import styled from "styled-components";
import { DarkGray } from "../../../utils/colors";
import { MainButton } from "../../MainButton";

export const CardContainer = styled.div`
    height: 430px;
    width: 400px;
    background-color: ${DarkGray};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 50%) 0px 10px 20px;
`;

export const ImgContainer = styled.div`
    height: 50%;
    width: 100%;
`;
export const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 0;
`;
export const TextContainer = styled.div`
    text-align: center;
    padding: 10px;
`;

export const TitleContainer = styled.div`
    margin: 20px;
`;

export const Title = styled.h3`
    font-size: 1.5rem;
`;

export const DescriptionContainer = styled.div``;
export const Description = styled.p``;
export const ButtonCard = styled(MainButton)`
    font-size: 1.3rem;
    font-weight: 700;
    padding: 10px 20px;
`;
