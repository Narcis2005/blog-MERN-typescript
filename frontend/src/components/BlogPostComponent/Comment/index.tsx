import React from "react";
import {FaTrash, FaEdit} from "react-icons/fa";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ImageContainer, ParentCommentContainer, CommentContainer, LeftSideContainer, CommentImage, RightSideComment, Username, CommentDate, CenterRightSideContainer, CommentContent, BottomRightSideContainer, ReplyButton, TopRightSideContainer, EditDeleteIconsContainer, ReplyCommentContainer, UsernameDateContainer
 } from "./commentComponents";
const Comment = () => {
    const style = {
        fontSize: "1.5rem",
        cursor: "pointer"
    };
    return (
        <>
            <ParentCommentContainer>
                <CommentContainer>
                    <LeftSideContainer>
                        <ImageContainer>
                            <CommentImage src="https://images.unsplash.com/photo-1640622657946-9c6ef5849020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                        </ImageContainer>
                    </LeftSideContainer>
                    <RightSideComment>
                        <TopRightSideContainer>
                            <UsernameDateContainer>
                                <Username>Narcis</Username>
                                <CommentDate>5 minutes ago</CommentDate>
                            </UsernameDateContainer>
                            <EditDeleteIconsContainer>
                                <FaEdit  style={style}/>
                                <FaTrash style={style}/>
                            </EditDeleteIconsContainer>
                        </TopRightSideContainer>
                        <CenterRightSideContainer>
                            <CommentContent>
                               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, commodi expedita nostrum molestias accusantium odit perspiciatis recusandae, maxime minus harum omnis ab dolor non maiores? Aperiam odit fugit accusantium illum tempore. Iste illum deleniti nam repellat quaerat, ipsa et repellendus.
                            </CommentContent>
                        </CenterRightSideContainer>
                        <BottomRightSideContainer>
                            <ReplyButton>Reply</ReplyButton>
                        </BottomRightSideContainer>
                    </RightSideComment>
                </CommentContainer>

                <ReplyCommentContainer>
                <LeftSideContainer>
                        <ImageContainer>
                            <CommentImage src="https://images.unsplash.com/photo-1640622657946-9c6ef5849020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                        </ImageContainer>
                    </LeftSideContainer>
                    <RightSideComment>
                        <TopRightSideContainer>
                            <UsernameDateContainer>
                                <Username>Narcis</Username>
                                <CommentDate>5 minutes ago</CommentDate>
                            </UsernameDateContainer>
                            <EditDeleteIconsContainer>
                                <FaEdit  style={style}/>
                                <FaTrash style={style}/>
                            </EditDeleteIconsContainer>
                        </TopRightSideContainer>
                        <CenterRightSideContainer>
                            <CommentContent>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est nulla, perferendis quo minima aut perspiciatis repellendus provident praesentium ullam suscipit eaque eligendi sed consequuntur pariatur dolores illum deleniti excepturi sequi adipisci expedita! Impedit sit consequatur dignissimos asperiores provident, blanditiis autem aspernatur perspiciatis doloremque officiis quam id quae ducimus sunt voluptas? Minus natus iure laborum totam animi quam dolores autem.
                            </CommentContent>
                        </CenterRightSideContainer>
                        <BottomRightSideContainer>
                            <ReplyButton>Reply</ReplyButton>
                        </BottomRightSideContainer>
                    </RightSideComment>
                </ReplyCommentContainer>
            </ParentCommentContainer>
        </>
    );
};

export default Comment;