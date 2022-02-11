import { DarkBackground } from "../../../containers/DarkBackground";
import React from "react";
import { MainText } from "../../../globalStyles";
import { lightRed } from "../../../utils/colors";

//This could be a search function for tags
const SpecifyTag = () => {
    return (
        <>
            <DarkBackground>
                <MainText color={lightRed}>
                    You need to specify a tag in the url. Example: /blog/tag/(here specify the tag)
                </MainText>
            </DarkBackground>
        </>
    );
};

export default SpecifyTag;
