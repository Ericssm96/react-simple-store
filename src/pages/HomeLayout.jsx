import { Outlet } from "react-router";
import { Header } from "../components";

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <nav>
        <h1>HomeLayout</h1>
      </nav>
      <main className="align-element py-20">
        <Outlet />
      </main>
    </>
  )
}