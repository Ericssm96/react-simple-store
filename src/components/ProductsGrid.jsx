import { useLoaderData, Link } from "react-router";
import { formatPrice } from "../utils";

export const ProductsGrid = () => {
  const {featuredProducts} = useLoaderData();
  
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {
        featuredProducts.map((product) => {
          const {image, title, price} = product.attributes;
          console.log(product);
          return (
            <Link key={product.id} to={`/products/${product.id}`} className="card w-full shadow-xl hover:shadow-2xl transition duration-300" >
              <figure>
                <img src={image} alt={title} />
              </figure>
              <div className="card-body items-center text-center">
                <h2>{title}</h2>
                <span className="text-secondary">{formatPrice(price)}</span>
              </div>
            </Link>
          );
        })
      }
    </div>
  )
}