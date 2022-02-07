import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../..";
import { IComment } from "../../../redux/types/post";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
    ImageContainer,
    ParentCommentContainer,
    CommentContainer,
    LeftSideContainer,
    CommentImage,
    RightSideComment,
    Username,
    CommentDate,
    CenterRightSideContainer,
    CommentContent,
    BottomRightSideContainer,
    ReplyButton,
    TopRightSideContainer,
    EditDeleteIconsContainer,
    ReplyCommentContainer,
    UsernameDateContainer,
} from "./commentComponents";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Comment = ({ createdAt, createdBy, content, replies }: IComment) => {
    const style = {
        fontSize: "1.5rem",
        cursor: "pointer",
    };
    const auth = useSelector((state: RootState) => state.auth);
    //Inspired from https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
    const formatedData = (date: Date): string => {
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        let interval = seconds / (60 * 60 * 24 * 365);
        if (interval > 1) {
            return `${Math.floor(interval)} years ago`;
        }
        interval = seconds / (60 * 60 * 24 * 30);
        if (interval > 1) {
            return `${Math.floor(interval)}  months ago`;
        }
        interval = seconds / (60 * 60 * 24);
        if (interval > 1) {
            return `${Math.floor(interval)}  days ago`;
        }
        interval = seconds / (60 * 60);
        if (interval > 1) {
            return `${Math.floor(interval)}  hours ago`;
        }
        interval = seconds / 60;
        if (interval > 1) {
            return `${Math.floor(interval)} minutes ago`;
        }
        return `Just now`;
    };
    return (
        <>
            <ParentCommentContainer>
                <CommentContainer>
                    <LeftSideContainer>
                        <ImageContainer>
                            <CommentImage src={createdBy.imageURL} />
                        </ImageContainer>
                    </LeftSideContainer>
                    <RightSideComment>
                        <TopRightSideContainer>
                            <UsernameDateContainer>
                                <Username>Narcis</Username>
                                <CommentDate>{formatedData(new Date(createdAt))}</CommentDate>
                            </UsernameDateContainer>
                            <EditDeleteIconsContainer>
                                {auth.result.id === createdBy.userId && (
                                    <>
                                        <FaEdit style={style} />
                                        <FaTrash style={style} />
                                    </>
                                )}
                            </EditDeleteIconsContainer>
                        </TopRightSideContainer>
                        <CenterRightSideContainer>
                            <CommentContent>{content}</CommentContent>
                        </CenterRightSideContainer>
                        <BottomRightSideContainer>
                            {auth.status === "success" && <ReplyButton>Reply</ReplyButton>}
                        </BottomRightSideContainer>
                    </RightSideComment>
                </CommentContainer>
                {replies.map((reply) => (
                    <ReplyCommentContainer
                        key={
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            reply._id
                        }
                    >
                        <LeftSideContainer>
                            <ImageContainer>
                                <CommentImage src={reply.createdBy.imageURL} />
                            </ImageContainer>
                        </LeftSideContainer>
                        <RightSideComment>
                            <TopRightSideContainer>
                                <UsernameDateContainer>
                                    <Username>{reply.createdBy.username}</Username>
                                    <CommentDate>{formatedData(new Date(reply.createdAt))}</CommentDate>
                                </UsernameDateContainer>
                                <EditDeleteIconsContainer>
                                    {auth.result.id === reply.createdBy.userId && (
                                        <>
                                            <FaEdit style={style} />
                                            <FaTrash style={style} />
                                        </>
                                    )}
                                </EditDeleteIconsContainer>
                            </TopRightSideContainer>
                            <CenterRightSideContainer>
                                <CommentContent>{reply.content}</CommentContent>
                            </CenterRightSideContainer>
                            <BottomRightSideContainer></BottomRightSideContainer>
                        </RightSideComment>
                    </ReplyCommentContainer>
                ))}
            </ParentCommentContainer>
        </>
    );
};

export default Comment;
