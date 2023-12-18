/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="my-8">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-500">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
