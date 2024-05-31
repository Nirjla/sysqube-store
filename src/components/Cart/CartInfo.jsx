const CartInfo = ({ product }) => {
  return (
    <>
      <div>
        <div className="flex justify-between text-base font-medium text-secondary">
          <h3>
            <a href={product.href}>{product.name}</a>
          </h3>
          <p className="ml-4">  ${(product.price * product.cartQuantity).toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
      </div>
    </>
  );
};

export default CartInfo;
