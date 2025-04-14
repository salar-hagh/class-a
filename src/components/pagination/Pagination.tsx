import ReactPaginate from "react-paginate";

interface IPagination {
  pageCount: number;
  handlePageClick: (params: { selected: number }) => void;
}

function Pagination({ handlePageClick, pageCount }: IPagination) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
