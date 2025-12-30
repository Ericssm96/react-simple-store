import { ProductsGrid } from "./ProductsGrid";
import { useLoaderData } from "react-router";
import { ProductsList } from "./ProductsList";

export const ProductsContainer = () => {

  return (
    <>
      <ProductsGrid />
      <ProductsList />
    </>
  )
}