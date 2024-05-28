import Headline from "../../components/Headline";
import products from "../../db/data";

const ProductLists = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto  py-16  sm:py-24  ">
          <Headline title="New" highlight={"Arrivals"} />
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-secondary">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="mt-1 text-lg font-medium text-secondary ">
                    {product.price}
                  </p>
                  <button className="text-primary text-sm">Add to Cart</button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLists;
