import Headline from "../../components/Headline";
import Breadcrumb from "../../components/Breadcrumb";
import PaymentBox from "../../components/PaymentBox";

const Payment = () => {
  const breadcrumbItems = [
    { label: "Checkout", link: "/checkout" },
    { label: "Payment Information", link: "/payment" },
  ];

  return (
    <>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="pt-4 mt-3 flex flex-wrap justify-between">
          <Headline title={"Payment"} highlight={"Information"} />
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="mt-[30px] mb-[30px] ">
          <PaymentBox />
        </div>
      </div>
    </>
  );
};

export default Payment;
