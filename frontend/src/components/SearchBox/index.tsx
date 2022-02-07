import React from "react";
import { SearchButton, SearchContainer, SearchForm, SearchInput } from "./SearchBoxComponents";
const SearchBox = ({
    handleChange,
    handleSubmit,
    value,
}: {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    value: string;
}) => {
    return (
        <>
            <SearchContainer>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchInput type="text" placeholder="Find posts..." onChange={handleChange} value={value} />
                    <SearchButton>Search</SearchButton>
                </SearchForm>
            </SearchContainer>
        </>
    );
};

export default SearchBox;
