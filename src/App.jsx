import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/styles.css'
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-2xl bg-sky-500 hover:bg-sky-700 inline-block">testing</h1>
    </>
  )
}

export default App
