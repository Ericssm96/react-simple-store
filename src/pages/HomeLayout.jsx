import { Outlet } from "react-router";
import { Header, Navbar } from "../components";

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="align-element py-20">
        <Outlet />
      </main>
    </>
  )
}