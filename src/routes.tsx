import { useRoutes } from "react-router-dom";
import App from "./App";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <App />,
    },
  ]);
  return element;
}
