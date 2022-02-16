import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import ProfileComponent from "../../components/ProfileComponent";
import { RootState } from "../../index";

interface IProfileData {
    imageSrc: string;
    fullName: string;
    email: string;
    username: string;
}
export interface Iprofile {
    edit: boolean;
    setEdit: Dispatch<SetStateAction<boolean>>;
    profileData: IProfileData;
    setProfileData: Dispatch<SetStateAction<IProfileData>>;
    previousImage: string;
}

const Profile: React.FC = () => {
    const [edit, setEdit] = useState(false);
    const auth = useSelector((state: RootState) => state.auth);
    const [profileData, setProfileData] = useState({
        imageSrc: "",
        fullName: "",
        email: "",
        username: "",
    });
    useEffect(() => {
        if (auth.status === "success") {
            setProfileData({
                imageSrc: auth.result.imageURL,
                fullName: auth.result.fullName,
                email: auth.result.email,
                username: auth.result.username,
            });
        }
    }, [auth]);

    const previousImage = auth.result.imageURL;
    return (
        <>
            <Helmet>
                <title>{profileData.username}</title>
            </Helmet>
            <ProfileComponent
                edit={edit}
                setEdit={setEdit}
                profileData={profileData}
                setProfileData={setProfileData}
                previousImage={previousImage}
            />
        </>
    );
};
export default Profile;
