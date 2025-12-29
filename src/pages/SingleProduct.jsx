import { useLoaderData } from "react-router";
import { formatPrice, customFetch } from "../utils";
import { Link } from "react-router";
import { useState } from "react";

export const loader = async ({params}) => {
  try {
    const productReq = await customFetch.get(`/products/${params.id}`);
    const productData = productReq.data.data;
  
    return {productData};
  } catch (error) {
    console.log(error);
    return {productData: {}};
  }
}

export const SingleProduct = () => {
  const {productData} = useLoaderData();
  const {image, title, price, description, colors, company} = productData.attributes;
  const dollarsAmount = formatPrice(price);

  return (
    <div>SingleProduct</div>
  )
}