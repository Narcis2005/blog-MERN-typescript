import styled from "styled-components";
import { LightGray } from "../../../utils/colors";

export const ParentCommentContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 3rem;
`;
export const CommentContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 40px 50px;
    min-height: 250px;
    background: ${LightGray};
    border-radius: 10px;
    @media (max-width: 960px) { 
        flex-direction: column;
    }
`;

export const LeftSideContainer = styled.div`
    height: 100%;
    @media (max-width: 960px) { 
        width: 100%;
        margin-bottom: 10%;
    }
`;
export const ImageContainer = styled.div`
    height: 90px;
    width: 90px;
    margin: auto;
`;
export const CommentImage = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 50%;
`;
export const RightSideComment = styled.div`
    margin-left: 3%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;
export const TopRightSideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 960px) { 
        padding-bottom: 15px;
        flex-direction: column;
        gap: 20px;
    }
`;
export const Username = styled.p`
    color: white;
    font-size: 1.6rem;
    font-weight: 700;
`;
export const UsernameDateContainer = styled.div`
    display: flex;
    width: 15rem;
    justify-content: space-between;
    align-items: center;
`;
export const CommentDate = styled.p`
`;
export const EditDeleteIconsContainer = styled.div`
    height: 20px;
    gap: 20px;
    margin: 0;
    display: flex;
    align-items: center;
`;

export const CenterRightSideContainer = styled.div`
`;
export const CommentContent = styled.p`
    line-height: 1.5rem;
`;

export const BottomRightSideContainer = styled.div`
    padding-top: 15px;
`;

export const ReplyButton = styled.button`
    color: white;
    background: transparent;
    border:none;
    cursor: pointer;
    font-size: 1.15rem;
`;

export const ReplyCommentContainer = styled.div`
     width: 90%;
    display: flex;
    padding: 30px 50px;
    min-height: 250px;
    background: ${LightGray};
    border-radius: 10px;
    @media (max-width: 960px) { 
        flex-direction: column;
    }
`;