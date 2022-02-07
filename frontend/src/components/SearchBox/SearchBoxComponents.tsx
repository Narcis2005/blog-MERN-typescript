import styled from "styled-components";
import { FormInput } from "../Form";
import { MainButton } from "../MainButton";
import { LightGray } from "../../utils/colors";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: solid 1px white; */
    margin: 20px;
    align-self: flex-end;
    margin-right: 15%;
    @media (max-width: 960px) {
        margin-right: 0;
        margin-left: 0;
        align-self: center;
    }
`;
export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
`;
export const SearchInput = styled(FormInput)`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: none;
    margin: 0;
    background: ${LightGray};
    &:focus {
        border: none;
        outline: none;
    }
    &::placeholder {
        opacity: 0.8;
    }
    @media (max-width: 960px) {
        width: 200px;
    }
`;
export const SearchButton = styled(MainButton)`
    height: 50px;
    margin: 0;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    @media (max-width: 960px) {
        padding: 10px 25px;
        height: 40px;
    }
`;
