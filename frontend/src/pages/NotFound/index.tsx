import { DarkBackground } from "../../containers/DarkBackground";
import { MainText } from "../../globalStyles";
import React from "react";
import { lightRed } from "../../utils/colors";

const NotFound = () => {
    return (
        <>
            <DarkBackground>
                <MainText color={lightRed}>This page does not exist. Error 404.</MainText>
            </DarkBackground>
        </>
    );
};

export default NotFound;
