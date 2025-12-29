import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router";

export const loader = async () => {
  try {
    const featuredProductsReq = await customFetch.get("/products?featured=true");
    const featuredProducts = featuredProductsReq.data.data

    return {featuredProducts};
  } catch (e) {
    console.log(e);
    return {featuredProducts: []};
  }
}

export const Landing = () => {
  const {featuredProducts} = useLoaderData();
  console.log(featuredProducts);
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}