import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import CartWrapper from "../../components/Cart/CartWrapper";
import { products } from "../../db/data";
import React from "react";
import CommonSlideover from "../../components/CommonSlideover";

const Cart = ({ isCartOpen, toggleCart }) => {
  return (
    <CommonSlideover isOpen={isCartOpen} toggleOpen={toggleCart}>
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-medium text-primary">Shopping cart</h2>
          <div className="ml-3 flex h-7 items-center">
            <button
              type="button"
              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
              onClick={toggleCart}
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
              {products.map((product) => (
                <React.Fragment key={product.id}>
                  <CartWrapper product={product}>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center">
                        <div className="text-gray-600  pr-3">Qty</div>
                        <div className="flex justify-between items-center gap-3">
                          <button className="bg-gray-200 p-2 rounded-md border border-transparent text-gray-600 ">
                            +
                          </button>
                          <div className="text-gray-600 text-sm ">
                            {product.quantity}
                          </div>

                          <button className="bg-gray-200 p-2 rounded-md border border-transparent text-gray-600 ">
                            -
                          </button>
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-primary hover:text-accent"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </CartWrapper>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6 ">
        <div className="flex justify-between text-base font-medium text-secondary mb-2">
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <div className="flex justify-between text-base font-medium text-secondary mb-2">
          <p>VAT</p>
          <p>$262.00</p>
        </div>
        <div className="flex justify-between text-base font-medium text-primary">
          <p>Total</p>
          <p>$262.00</p>
        </div>
        <div className="mt-6">
          <div>
            <Link
              // role="button"
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-primary  px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent"
              onClick={toggleCart}
            >
              Checkout
            </Link>
          </div>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500 ">
          <p>
            or{" "}
            <button
              type="button"
              className="font-medium text-primary  hover:text-accent"
              onClick={toggleCart}
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </CommonSlideover>
  );
};

export default Cart;
