import { useLoaderData, useLocation, useNavigate } from "react-router";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";

export const PaginationContainer = () => {
  const { productsMeta } = useLoaderData();
  const { pageCount, page } = productsMeta.pagination;

  const pages = Array.from({length: pageCount}, (_, index) => {
    return index + 1;
  });

  if(pageCount < 2) return null;

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
  }

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button 
        onClick={handlePageChange("prev")}
        className="btn btn-xs join-item sm:btn-md lg:text-[1.2rem]"
        >
          <BsChevronBarLeft />
        </button>
        {
          pages.map((pageNumber) => {
            return (
              <button 
              key={pageNumber}
              onClick={handlePageChange(pageNumber)}
              className={`btn btn-xs join-item sm:btn-md lg:text-[1.2rem] ${pageNumber == page && "btn-active"}`}
              >
                {pageNumber}
              </button>
            )
          })
        }
        <button 
        onClick={handlePageChange("next")}
        className="btn btn-xs join-item sm:btn-md lg:text-[1.2rem]"
        >
          <BsChevronBarRight />
        </button>
      </div>
    </div>
  )
}