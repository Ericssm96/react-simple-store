import { Hero } from "../components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router";

export const loader = async () => {
  try {
    const featuredProducts = await customFetch.get("/products?featured=true");

    return featuredProducts.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export const Landing = () => {
  const featuredProducts = useLoaderData();
  console.log(featuredProducts);
  return (
    <>
      <Hero />
    </>
  )
}