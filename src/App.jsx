import { RouterProvider } from "react-router-dom";
import { publicRouter } from "./routers/PublicRouter";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={publicRouter} />
    </>
  );
};

export default App;
