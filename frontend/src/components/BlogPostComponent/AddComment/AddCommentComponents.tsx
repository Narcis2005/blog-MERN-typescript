import styled from "styled-components";
import { FormTextarea } from "../../Form";
import { MainButton } from "../../MainButton";
import { CommentContainer } from "../Comment/commentComponents";

export const AddCommentContainer = styled(CommentContainer)`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 5em;
    @media (max-width: 960px) {
        align-items: center;
    }
`;

export const AddCommentTextarea = styled(FormTextarea)`
    width: 70%;
    @media (max-width: 960px) {
        width: 100%;
    }
`;
export const AddCommentTitle = styled.p`
    font-size: 1.8rem;
    font-weight: 700;
`;

export const SubmitComment = styled(MainButton)`
    max-width: 16vw;
    padding: 0 10px;

    @media (max-width: 960px) {
        max-width: 70vw;
        height: 50px;
    }
`;
interface IMessage {
    color: string;
}
export const Message = styled.p<IMessage>`
    font-size: 1.6rem;
    color: ${({ color }) => color};
`;
