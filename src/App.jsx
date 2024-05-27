import { RouterProvider } from "react-router-dom";
import { publicRouter } from "./routers/PublicRouter";

const App = () => {
  return (
    <>
      <RouterProvider router={publicRouter} />
    </>
  );
};

export default App;
