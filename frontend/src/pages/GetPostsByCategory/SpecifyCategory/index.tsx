import { DarkBackground } from "../../../containers/DarkBackground";
import React from "react";
import { MainText } from "../../../globalStyles";
import { lightRed } from "../../../utils/colors";

//This could be a search function for tags
const SpecifyCategory = () => {
    return (
        <>
            <DarkBackground>
                <MainText color={lightRed}>
                    You need to specify a category in the url. Example: /blog/category/(here specify the category)
                </MainText>
            </DarkBackground>
        </>
    );
};

export default SpecifyCategory;
