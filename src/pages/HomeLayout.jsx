import { Outlet } from "react-router";

export const HomeLayout = () => {
  return (
    <>
      <nav>
        <h1>HomeLayout</h1>
      </nav>
      <Outlet />
    </>
  )
}