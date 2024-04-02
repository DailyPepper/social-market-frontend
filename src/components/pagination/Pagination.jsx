import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Determine if it's the last page
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex justify-center w-full pt-[4rem] gap-[5rem]">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <IoIosArrowBack size={25}/>
      </button>
      <button onClick={handleNextPage} disabled={isLastPage}>
        <IoIosArrowForward size={25} color={isLastPage ? "grey" : "black"} />
      </button>
    </div>
  );
};

export default Pagination;
