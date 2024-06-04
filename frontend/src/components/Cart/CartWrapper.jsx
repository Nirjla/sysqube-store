import CartImgBox from "./CartImgBox";
import CartInfo from "./CartInfo";

const CartWrapper = ({ children, product }) => {
  return (
    <>
      <li className="flex py-6">
        <CartImgBox product={product} />
        <div className="ml-4 flex flex-1 flex-col">
          <CartInfo product={product} />
          {children && children}
        </div>
      </li>
    </>
  );
};

export default CartWrapper;
