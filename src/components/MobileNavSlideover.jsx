import { XMarkIcon } from "@heroicons/react/24/outline";
import CommonSlideover from "./CommonSlideover";
import { Link } from "react-router-dom";

const MobileNavSlideover = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      <CommonSlideover isOpen={isMenuOpen} toggleOpen={toggleMenu}>
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium text-primary"> Menu</h2>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close panel</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                <li className="py-5 text-base font-medium text-secondary ">
                  <Link to="/" className="inline-block" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li className="py-5 text-base font-medium text-secondary">
                  <Link to="/" className="inline-block">
                    Products
                  </Link>
                </li>
                <li className="py-5 text-base font-medium text-secondary">
                  <Link to="/" className="inline-block">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CommonSlideover>
    </>
  );
};

export default MobileNavSlideover;
