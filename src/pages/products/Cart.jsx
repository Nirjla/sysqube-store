import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import CartWrapper from "../../components/Cart/CartWrapper";
import React, { useEffect } from "react";
import CommonSlideover from "../../components/CommonSlideover";
import {
  clearCart,
  decreaseQuantity,
  getTotal,
  increaseQuantity,
  removeFromCart,
} from "../../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ isCartOpen, toggleCart }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

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
            {cart.cartItems.length === 0 ? (
              <p  className="text-sm text-secondary">Your cart is currently empty</p>
            ) : (
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cart.cartItems.map((product) => (
                  <React.Fragment key={product.id}>
                    <CartWrapper product={product}>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center">
                          <div className="text-gray-600  pr-3">Qty</div>
                          <div className="flex justify-between items-center gap-3">
                            <button
                              className="bg-gray-200 p-2 rounded-md border border-transparent text-gray-600 "
                              onClick={() =>
                                dispatch(increaseQuantity(product))
                              }
                            >
                              +
                            </button>
                            <div className="text-gray-600 text-sm ">
                              {product.cartQuantity}
                            </div>

                            <button
                              className="bg-gray-200 p-2 rounded-md border border-transparent text-gray-600 "
                              onClick={() =>
                                dispatch(decreaseQuantity(product))
                              }
                            >
                              -
                            </button>
                          </div>
                        </div>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-primary hover:text-accent"
                            onClick={() => dispatch(removeFromCart(product))}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </CartWrapper>
                  </React.Fragment>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6 ">
        <div className="flex justify-between text-base font-medium text-secondary mb-2">
          <p>Subtotal</p>
          <p className="">${cart.cartTotalAmount}</p>
        </div>
        {cart.cartItems.length > 0 && (
          <div className="mt-6 space-y-3">
            <button
              className="w-full flex items-center justify-center rounded-md border border-transparent bg-primary  px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
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
        )}
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
