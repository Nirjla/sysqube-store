import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import Cart from "./products/Cart";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavSlideover from "../components/MobileNavSlideover";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white border-b">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="header-logo">
              <Link to="/">
                <h1 className="font-semibold text-lg md:text-xl  lg:text-2xl text-nowrap space-x-2 text-secondary ">
                  Sys
                  <span className="text-primary">Qube</span>
                  <span>Store</span>
                </h1>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <ul className="flex items-center space-x-6 text-secondary">
                <li>
                  <Link
                    to="/"
                    className="leading-[60px] capitalize font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="leading-[60px] capitalize font-medium"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="leading-[60px] capitalize font-medium"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={toggleCart}>
                <CiShoppingCart
                  size={30}
                  className="font-extrabold text-secondary"
                />
              </button>
              <button className="md:hidden" onClick={toggleMenu}>
                <RxHamburgerMenu className="h-6 w-6 text-secondary" />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <MobileNavSlideover isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Cart toggleCart={toggleCart} isCartOpen={isCartOpen} />
    </>
  );
};

export default Navbar;
