import { useRouteError } from "react-router";

export const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <h4 className="font-bold text-4xl">There was an error...</h4>  
  )
}