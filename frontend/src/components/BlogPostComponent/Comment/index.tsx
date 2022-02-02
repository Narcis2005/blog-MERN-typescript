import React from "react";
import { CommentContainer, ProfileContainer, ProfileImage, Username, RightSideComment, ButtonsAndDateContainer, CommentDate, CommentButton, CommentText, ImageContainer } from "./commentComponents";
const Comment = () => {
    return (
        <>
            <CommentContainer>
                    <ProfileContainer>
                        <Username>Narcis</Username>
                        <ImageContainer>
                             <ProfileImage src="https://chirilovnarcis.ro/img/pozaCuMine.jpg"/>
                        </ImageContainer>
                    </ProfileContainer>
                    <RightSideComment>
                        <ButtonsAndDateContainer>
                            <CommentDate>{new Date().toUTCString()}</CommentDate>
                            <CommentButton>Update</CommentButton>
                            <CommentButton>Delete</CommentButton>
                        </ButtonsAndDateContainer>
                        <CommentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit atque nisi assumenda, accusantium nemo inventore?</CommentText>
                    </RightSideComment>
                </CommentContainer>
        </>
    );
};

export default Comment;