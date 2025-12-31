import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router";

export const loader = async () => {
  try {
    const featuredProductsReq = await customFetch.get("/products?featured=true");
    const featuredProducts = featuredProductsReq.data.data

    return {productsList: featuredProducts};
  } catch (e) {
    console.log(e);
    return {productsList: []};
  }
}

export const Landing = () => {  
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}