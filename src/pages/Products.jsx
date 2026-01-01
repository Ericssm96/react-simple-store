import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

export const loader = async({request}) => {
  const searchParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);  

  try {
    const productsListRes = await customFetch.get(url, {
      params: searchParams
    });
    const productsList = productsListRes.data.data;
    const productsMeta = productsListRes.data.meta;
  
    return {productsList, productsMeta, searchParams};
  } catch (error) {
    console.log(error);
    return {productsList: [], productsMeta: [], searchParams};
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