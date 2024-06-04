const CartImgBox = ({ product }) => {
  return (
    <>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </>
  );
};

export default CartImgBox;
