import { useState } from "react";
import CommonButton from "./CommonButton";
import InputWrapper from "./InputWrapper";
import { Form, Formik } from "formik";
import { paymentValidationSchema } from "../schemas/validationSchema";

const PaymentBox = () => {
  const [activePaymentMethod, setActivePaymentMethod] = useState("Credit Card");

  const handlePaymentMethodClick = (method) => {
    setActivePaymentMethod(method);
  };

  const initialValues = {
    cardholderName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  };

  return (
<div className="payment">
      <Formik
        initialValues={initialValues}
        validationSchema={paymentValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="grid grid-cols-3 gap-[30px] mb-[30px] lg:mb-[90px]">
              <div className="lg:col-span-1 col-span-3">
                <h3 className="text-lg font-medium text-primary capitalize leading-7 pb-3">
                  Choose Your Payment Method
                </h3>
                <ul className="mt-2">
                  <li className={`flex gap-4 mb-3 w-full text-gray-900 sm:text-sm sm:leading-6`}>
                    <button
                      type="button"
                      className={`w-full rounded-md border-0 pl-7 ${
                        activePaymentMethod === "Credit Card"
                          ? "ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                          : "placeholder:text-gray-400"
                      }`}
                      onClick={() => handlePaymentMethodClick("Credit Card")}
                    >
                      <div className="flex items-center gap-4">
                        <div>
                          <img src="/assets/credit-card.png" alt="" className="w-14" />
                        </div>
                        <div className="text-secondary font-medium capitalize leading-3">
                          Credit Card
                        </div>
                      </div>
                    </button>
                  </li>
                  <li className={`flex gap-4 mb-2 w-full text-gray-900 sm:text-sm sm:leading-6`}>
                    <button
                      type="button"
                      className={`w-full rounded-md border-0 pl-7 ${
                        activePaymentMethod === "PayPal"
                          ? "ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                          : "placeholder:text-gray-400"
                      }`}
                      onClick={() => handlePaymentMethodClick("PayPal")}
                    >
                      <div className="flex items-center gap-4">
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
              <div className="lg:col-span-2 col-span-3 lg:mt-3">
                <div className="payment-details">
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <InputWrapper label="Cardholder Name" name="cardholderName" />
                    <InputWrapper label="Card Number" name="cardNumber" />
                    <InputWrapper label="Expiration Date (MM/YY)" name="expirationDate" />
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentBox;