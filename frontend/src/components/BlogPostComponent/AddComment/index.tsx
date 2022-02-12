import React from "react";
import {
    AddCommentContainer,
    AddCommentTextarea,
    AddCommentTitle,
    Message,
    SubmitComment,
} from "./AddCommentComponents";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AddComment = ({
    setValue,
    handleSubmit,
    message,
    error,
}: {
    setValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.MouseEvent) => void;
    message?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error?: any;
}) => {
    return (
        <>
            <AddCommentContainer>
                {message && <Message color="green">{message}</Message>}
                {error && <Message color="red">{error}</Message>}
                <AddCommentTitle>Add Comment</AddCommentTitle>
                <AddCommentTextarea placeholder="Write your comment" onChange={setValue} />
                <SubmitComment onClick={handleSubmit}>Add Comment</SubmitComment>
            </AddCommentContainer>
        </>
    );
};

export default AddComment;
