import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Iprofile } from "../../pages/Profile";
import { getUserByToken, logoutUser } from "../../redux/slices/auth";
import api from "../../utils/api";
import { Message, MessageContainer } from "../Form";
import {  BasicText, ButtonContainer, EditButton, EditContainer, Form, ImageContainer, Img, Input, Label, LogoutButton, ProfileContainer, TextContainer, Title } from "./ProfileComponents";

const ProfileComponent = ({edit, setEdit, profileData, setProfileData, previousImage} : Iprofile) => {
    const dispatch = useDispatch();
    const Logout = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(logoutUser())
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({...profileData, [e.target.name]: e.target.value})
    }

    const [apiError, setApiError] = useState("")
    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    console.log(apiError)

        e.preventDefault();
        api.put("/profile/update-profile", {data: {fullName: profileData.fullName, imageURL: profileData.imageSrc, email: profileData.email}})
            .then(response => {
                if(response.status === 200) {
                    dispatch(getUserByToken())
                    setEdit(false)
                }
            })
            .catch(error => {
                 setApiError(error.response.data.message);
            })
    }
    console.log(apiError)
    return (
        <>
            <ProfileContainer>
                <ImageContainer>
                    <Img src={previousImage}/>
                </ImageContainer>
                {!edit && (
                    <>
                    <TextContainer>
                        <Title > About you</Title>
                        <BasicText>Full name: {profileData.fullName}</BasicText>
                        <BasicText>Email: {profileData.email}</BasicText>
                        <BasicText>Username: {profileData.username}</BasicText>
                    </TextContainer>
                    <ButtonContainer>
                    <EditButton onClick = {
                        (e: React.MouseEvent<HTMLElement>) => {
                            e.preventDefault();
                            setEdit(true)
                    }}>
                        Edit Profile
                    </EditButton>
                    <LogoutButton onClick={Logout}>Log out</LogoutButton>
                </ButtonContainer>
                </>
                )}
                {edit && (
                    <>
                    <EditContainer>
                    <MessageContainer background = "darkred" display = {!apiError ? "none": "block"}> 
                        <Message>{apiError}</Message>
                    </MessageContainer>
                        <Form>
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input 
                                required
                                type="text"
                                name = "fullName"
                                onChange={handleChange}
                                value={profileData.fullName}
                            />
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                required
                                type="email"
                                name = "email"
                                onChange={handleChange}
                                value={profileData.email}
                            />
                            <Label htmlFor="imageSrc">Image link</Label>
                            <Input 
                                required
                                type="text"
                                name = "imageSrc"
                                onChange={handleChange}
                                value={profileData.imageSrc}
                            />
                        </Form>
                    </EditContainer>
                    <ButtonContainer>
                    <EditButton onClick={handleSubmit}>
                        Save Profile
                    </EditButton>
                </ButtonContainer>
                    </>
                )}
                
            </ProfileContainer>
        </>
    )
}
export default ProfileComponent;