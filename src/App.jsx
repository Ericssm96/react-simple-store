import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './css/styles.css';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router/dom';
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    ErrorBoundary: Error,
    children: [
      {
        index: true,
        Component: Landing
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "cart",
        Component: Cart
      },
      {
        path: "checkout",
        Component: Checkout
      },
      {
        path: "orders",
        Component: Orders
      },
      {
        path: "products",
        Component: Products
      },
      {
        path: "products/:id",
        Component: SingleProduct
      }
    ]
  },
  {
    path: "/login", 
    Component: Login
  },
  {
    path: "/register",
    Component: Register
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App
