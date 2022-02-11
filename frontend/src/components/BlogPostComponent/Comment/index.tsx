import { AxiosError } from "axios";
import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../..";
import { getPost } from "../../../redux/slices/post";
import { IComment } from "../../../redux/types/post";
import api from "../../../utils/api";
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
interface ICommentComponent extends IComment {
    slug: string;
    postId: string;
}
const Comment = ({ createdAt, createdBy, content, replies, _id, slug, postId }: ICommentComponent) => {
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
    interface IResult {
        message: string;
    }
    interface ICall {
        status: "idle" | "loading" | "success" | "failed";
        result: IResult | null;
        error: any;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [call, setCall] = useState<ICall>({
        status: "idle",
        result: null,
        error: null,
    });
    const dispatch = useDispatch();
    const handleDelete = (e: React.MouseEvent, id: string, isReply: boolean) => {
        e.preventDefault();
        setCall({ status: "loading", result: null, error: null });
        api.delete<IResult>("/post/delete-comment", {
            data: {
                commentId: id,
                ...(isReply && { parentId: _id }),
                postId: postId,
            },
        })
            .then((result) => {
                setCall({ status: "success", error: null, result: result.data });
                dispatch(getPost(slug));
            })
            .catch((error) => {
                const err = error as AxiosError;
                if (err.response) {
                    if (err.response.data.message === "The session ended. Please reconnect") return;
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    setCall({ status: "failed", result: null, error: err.response.data.message });
                    return;
                }
                console.log(error);
                setCall({ status: "failed", result: null, error: "An unkown error appeard. Please contact us" });
            });
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
                                        <FaTrash
                                            style={style}
                                            onClick={(e: React.MouseEvent) => handleDelete(e, _id, false)}
                                        />
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
                                            <FaTrash
                                                style={style}
                                                onClick={(e: React.MouseEvent) => handleDelete(e, reply._id, true)}
                                            />
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
