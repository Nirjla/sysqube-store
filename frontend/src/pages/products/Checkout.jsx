import Breadcrumb from "../../components/Breadcrumb";
import CheckoutBox from "../../components/CheckoutBox";
import Headline from "../../components/Headline";

const Checkout = () => {
  const breadcrumbItems = [{ label: "Checkout" }];
  return (
    <>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center pt-4 mt-3 ">
          <Headline title="Checkout" />
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="mt-[30px] mb-[30px] ">
          <CheckoutBox />
        </div>
      </div>
    </>
  );
};

export default Checkout;
