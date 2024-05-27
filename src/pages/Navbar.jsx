import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import Cart from "./products/Cart";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <header>
        <nav className="container ">
          <div className="flex justify-between items-center py-[10px] ">
            <div className="header-logo">
              <Link to="">
                <img
                  src="./assets/sysqube-store.png"
                  alt=""
                  className="max-w-[144px] "
                />
              </Link>
            </div>
            <div>
              <ul className=" flex justify-center  items-center flex-wrap text-secondary">
                <li className=" ml-[20px] mr-[30px]">
                  <Link
                    to="/"
                    className="leading-[60px] capitalize  flex items-center font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li className=" ml-[20px] mr-[30px]">
                  <Link
                    to="/"
                    className="leading-[60px] capitalize  flex items-center font-medium"
                  >
                    Products
                  </Link>
                </li>
                <li className=" ml-[20px] mr-[30px]">
                  <Link
                    to="/"
                    className="leading-[60px] capitalize  flex items-center font-medium"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button onClick={() => setIsCartOpen(!isCartOpen)}>
                <CiShoppingCart
                  size={30}
                  className="font-extrabold text-secondary"
                />
              </button>
              {isCartOpen && <Cart />}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
