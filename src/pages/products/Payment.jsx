import { useState } from "react";
import InputWrapper from "../../components/InputWrapper";
import Headline from "../../components/Headline";
import CommonButton from "../../components/CommonButton";
import Breadcrumb from "../../components/Breadcrumb";

const Payment = () => {
  const breadcrumbItems = [
    { label: "Checkout", link: "/checkout" },
    { label: "Payment Information", link: "/payment" },
  ];

  const [activePaymentMethod, setActivePaymentMethod] = useState("Credit Card");

  const handlePaymentMethodClick = (method) => {
    setActivePaymentMethod(method);
  };

  return (
    <>
      <div className="container">
        <div className="pt-4 mt-3 flex justify-between">
          <Headline title={"Payment"} highlight={"Information"} />
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <form action="">
          <div className="grid grid-cols-3 gap-[30px] mt-[30px] mb-[30px] lg:mb-[90px]">
            <div className="lg:col-span-1 col-span-2">
              <h3 className="lg:text-[22px] md:text-[20px] sm:text-[18px] font-semibold text-secondary capitalize leading-[1] pb-5">
                Choose Your Payment Method
              </h3>
              <ul className="mt-2">
                <li
                  className={`flex gap-4 mb-3 w-full  text-gray-900   sm:text-sm sm:leading-6`}
                >
                  <button
                    type="button"
                    className={`w-full rounded-md border-0  pl-7 pr-20 

                  ${
                    activePaymentMethod === "Credit Card"
                      ? "ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                      : "placeholder:text-gray-400"
                  }`}
                    onClick={() => handlePaymentMethodClick("Credit Card")}
                  >
                    <div className="flex items-center gap-4 ">
                      <div>
                        <img
                          src="/assets/credit-card.png"
                          alt=""
                          className="w-14"
                        />
                      </div>
                      <div className="text-secondary font-medium capitalize leading-3">
                        Credit Card
                      </div>
                    </div>
                  </button>
                </li>
                <li
                  className={`flex gap-4 mb-2 w-full  text-gray-900   sm:text-sm sm:leading-6`}
                >
                  <button
                    type="button"
                    className={`w-full rounded-md border-0  pl-7 pr-20 

                  ${
                    activePaymentMethod === "PayPal"
                      ? "ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                      : "placeholder:text-gray-400"
                  }`}
                    onClick={() => handlePaymentMethodClick("PayPal")}
                  >
                    <div className="flex items-center gap-4 ">
                      <div>
                        <img src="/assets/paypal.png" alt="" className="w-14" />
                      </div>
                      <div className="text-secondary font-medium capitalize leading-3">
                        PayPal
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 col-span-3 lg:mt-6">
              <div className="payment-details">
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <InputWrapper
                    label="Cardholder Name"
                    name="cardholder-name"
                  />
                  <InputWrapper label="Card Number" name="card-number" />
                  <InputWrapper
                    label="Expiration Date (MM/YY)"
                    name="expiration-date"
                  />
                  <InputWrapper label="CVV" name="cvv" />
                  <div className="mt-2">
                    <CommonButton link="/cart" label="Back to Shipping" />
                  </div>
                  <div className="mt-2">
                    <CommonButton link="/review-order" label="Review Order" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
