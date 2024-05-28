import CartWrapper from "./CartWrapper";

const CartBox = ({ product }) => {
  return (
    <>
      <CartWrapper product={product}>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center">
            <div className="text-gray-600  pr-3">Qty</div>
            <div className="flex justify-between items-center gap-3">
              <button className="bg-gray-200 p-2 rounded-md border border-transparent text-gray-600 ">
                +
              </button>
              <div className="text-gray-600 text-sm ">{product.quantity}</div>

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
    </>
  );
};

export default CartBox;
