import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./pages/Navbar"
import CommonProgressBar from "./components/CommonProgressBar";

const Root = () => {
  const location = useLocation();
  const showProgressBar = ["/checkout", "/checkout/payment", "/checkout/payment/review-order"].includes(location.pathname);
  return (
    <div className="">
      <Navbar/>
      {showProgressBar && <CommonProgressBar />}
      <Outlet/>
    </div>
  )
}

export default Root
