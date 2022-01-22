import { DarkBackground } from "../../containers/DarkBackground";
import { MainText } from "../../globalStyles";
import React from "react";

const Loading = () => {
    return (
        <>
            <DarkBackground>
                <MainText color="white">Loading...</MainText>
            </DarkBackground>
        </>
    );
};

export default Loading;
