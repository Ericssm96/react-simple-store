import { useLoaderData, useLocation, useNavigate } from "react-router";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";

export const PaginationContainer = () => {
  const { productsMeta } = useLoaderData();
  const { pageCount, page } = productsMeta.pagination;

  if(pageCount < 2) return null;

  const { search, pathname } = useLocation();
  // search shows the query strings of the page we're currently in, if there's any
  // pathname shows the url path used to access this page. in this case it's "/products"
  const navigate = useNavigate();

  const pages = Array.from({length: pageCount}, (_, index) => {
    return index + 1;
  });

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  }

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        {page > 1 && (
        <button 
          onClick={handlePageChange(page - 1)}
          className="btn btn-xs join-item sm:btn-md lg:text-[1.2rem]"
        >
          <BsChevronBarLeft />
        </button>)}
        {
          pages.map((pageNumber) => {
            return (
              <button 
                key={pageNumber}
                onClick={()=>handlePageChange(pageNumber)}
                className={`btn btn-xs join-item sm:btn-md lg:text-[1.2rem] ${pageNumber == page && "btn-active"}`}
              >
                {pageNumber}
              </button>
            )
          })
        }
        {page < pages.length && (
        <button 
          onClick={()=>handlePageChange(page + 1)}
          className="btn btn-xs join-item sm:btn-md lg:text-[1.2rem]"
        >
          <BsChevronBarRight />
        </button>)}
      </div>
    </div>
  )
}