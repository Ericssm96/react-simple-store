import { Outlet } from "react-router";

export const HomeLayout = () => {
  return (
    <>
      <nav>
        <h1>HomeLayout</h1>
      </nav>
      <main className="align-element py-20">
        <Outlet />
      </main>
    </>
  )
}