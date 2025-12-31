import { Outlet, useNavigation } from "react-router";
import { Header, Navbar } from "../components";
import { Loading } from "../components";

export const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? 
      <Loading /> : 
      (<main className="align-element py-20">
        <Outlet />
      </main>)}     
    </>
  )
}