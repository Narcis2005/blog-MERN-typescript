import React, { MouseEvent } from "react";
import { PaginationButton, PaginationContainer } from "./paginationComponents";

const Pagination = ({totalPages, currentPage, handleClick} : {totalPages: number, currentPage: number, handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void}) => {
    return (
        <>
             <PaginationContainer> 
                    {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    [...Array(totalPages)].map((_, key: number) => (
                        // eslint-disable-next-line @typescript-eslint/semi
                        <PaginationButton isCurrentPage={currentPage === key +1} key={key+1} onClick={handleClick} value={key+1}>{key+1}</PaginationButton>
                    ))}
            </PaginationContainer>
        </>
    );
};

export default Pagination;