import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

export const loader = async({request}) => {
  try {
    const productsListRes = await customFetch.get(url);
    const productsList = productsListRes.data.data;
    const productsMeta = productsListRes.data.meta;
  
    return {productsList, productsMeta};
  } catch (error) {
    console.log(error);
    return {productsList: [], productsMeta: []};
  }
}

export const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}