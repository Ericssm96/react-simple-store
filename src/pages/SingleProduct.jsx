import { useLoaderData } from "react-router";
import { formatPrice, customFetch } from "../utils";
import { Link } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

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
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  }

  const cartProduct = {
    cartID: `${productData.id}${productColor}`,
    productID: productData.id,
    image,
    title,
    price,
    company,
    productColor,
    amount
  }

  const addToCart = () => {
    dispatch(addItem({product: cartProduct}));
  }

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            {title}
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
      {/* IMAGE */}
        <img src={image} alt={title} className="w-96 h-96 object-cover rounded-lg lg:w-full" />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">{company}</h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider label">Colors</h4>
            <div className="mt-2">
              {colors.map((color)=>{
                return (
                  <button key={color} type="button" onClick={()=>setProductColor(color)} style={{backgroundColor: color}} className={`badge w-6 h-6 mr-2 ${color === productColor && "border-2 border-secondary"}`}></button>
                )
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="w-full max-w-xs mt-2">
            <label htmlFor="amount" className="label">
              <h4 className="text-md font-medium tracking-wider">Amount</h4>
            </label>
            <input className="input input-secondary input-md [appearance:textfield] [&::-webkit-outer-spin-button]:mr-1 [&::-webkit-inner-spin-button]:mr-1 [&::-webkit-outer-spin-button]:my-1 [&::-webkit-inner-spin-button]:my-0" type="number" id="amount" value={amount} onChange={handleAmountChange} />
          </div>
          {/* CART BTN */}
          <div className="mt-10">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}