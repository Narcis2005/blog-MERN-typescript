import { DarkBackground } from "../../containers/DarkBackground"
import { MainText } from "../../globalStyles";

const NotFound = () => {
    return (
        <>
            <DarkBackground>
                <MainText color="red">
                    This page does not exist. Error 404.
                </MainText>
            </DarkBackground>
        </>
    )
}

export default NotFound;