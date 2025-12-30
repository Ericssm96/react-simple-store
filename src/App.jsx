import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './css/styles.css';
import { createBrowserRouter, RouterProvider } from "react-router";
// import { RouterProvider } from 'react-router/dom';
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages";
import { loader as landingLoader } from './pages/Landing';
import { loader as productLoader } from './pages/SingleProduct';
import { loader as productsListLoader } from './pages/Products';
import { ErrorElement } from './components';

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    ErrorBoundary: Error,
    children: [
      {
        index: true,
        Component: Landing,
        loader: landingLoader,
        ErrorBoundary: ErrorElement
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
        Component: Products,
        loader: productsListLoader
      },
      {
        path: "products/:id",
        Component: SingleProduct,
        loader: productLoader
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
