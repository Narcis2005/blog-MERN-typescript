import styled from "styled-components";
import { blue } from "../../utils/colors";

export const MainButton = styled.button`
    font-size: 1.1rem;
    margin-top: 10px;
    height: 45px;
    padding: 10px 50px;
    background: ${blue};
    border: none;
    cursor: pointer;
    border-radius: 10px;
    &:hover{
    opacity: 0.8;
}
`