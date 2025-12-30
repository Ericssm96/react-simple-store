import { ProductsGrid } from "./ProductsGrid";
import { ProductsList } from "./ProductsList";
import { useLoaderData } from "react-router";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

export const ProductsContainer = () => {
  const { productsMeta } = useLoaderData();
  const totalProducts = productsMeta.pagination.total;
  const [layoutMode, setLayoutMode] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm transition duration-300 ${pattern === layoutMode ? "btn-primary text-primary-content" : "btn-ghost text-base-content"}`;
  }

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {`${totalProducts} ${totalProducts > 1 ? "Products" : "Product"}`}
        </h4>

        <div className="flex gap-x-2">
          <button type="button" onClick={()=>setLayoutMode("grid")} className={setActiveStyles("grid")}>
            <BsFillGridFill />
          </button>
          <button type="button" onClick={()=>setLayoutMode("list")} className={setActiveStyles("list")}>
            <BsList />
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      {
        totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            No products found.
          </h5>
        ) : layoutMode === "grid" ? (
          <ProductsGrid />
        ) : <ProductsList />
      }
    </>
  )
}