import styled from "styled-components";
import { blue, DarkGray, LightGray } from "../../utils/colors";

export const PaginationContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 3em;
`;
interface IPaginationButton {
    isCurrentPage: boolean;
}
export const PaginationButton = styled.button<IPaginationButton>`
    background: ${LightGray};
    padding: 20px;
    cursor: pointer;
    border-radius: 10px;
    border: ${({ isCurrentPage }) => (isCurrentPage ? `solid ${blue} 3px` : `solid ${DarkGray} 3px`)};
    &:hover{
        filter: brightness(80%);
    }
`;
