import { DarkBackground } from "../../containers/DarkBackground";
import { MainText } from "../../globalStyles";

const Loading = () => {
    return (
        <>
            <DarkBackground>
                <MainText color="white">Loading...</MainText>
            </DarkBackground>
        </>
    )
}

export default Loading;