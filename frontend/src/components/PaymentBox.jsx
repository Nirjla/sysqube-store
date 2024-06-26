import { useEffect, useState } from "react";
import CommonButton from "./CommonButton";
import InputWrapper from "./InputWrapper";
import { Form, Formik, useFormikContext } from "formik";
import { paymentValidationSchema } from "../schemas/validationSchema";
import { useProgress } from "../constants";

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
  const FormObserver = () => {
    const { values } = useFormikContext();
    const { progress: shippingProgress, setProgress } = useProgress();
    console.log(shippingProgress);
    useEffect(() => {
      const filledFields = Object.values(values).filter((value) => !!value);
      const startFrom = shippingProgress === 50 ? 50 : shippingProgress;
      const paymentProgress =
        (filledFields.length / Object.keys(values).length) * (100 - startFrom);
      const progress = startFrom + paymentProgress;
      setProgress(progress);
    }, [values, setProgress]);

    return null;
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
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <FormObserver />
            <div className="grid grid-cols-3 gap-[30px] mb-[30px] lg:mb-[90px]">
              <div className="lg:col-span-1 col-span-3">
                <h3 className="text-lg font-medium text-primary capitalize leading-7 pb-3">
                  Choose Your Payment Method
                </h3>
                <ul className="mt-2">
                  <li
                    className={`flex gap-4 mb-3 w-full text-gray-900 sm:text-sm sm:leading-6`}
                  >
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
                    className={`flex gap-4 mb-2 w-full text-gray-900 sm:text-sm sm:leading-6`}
                  >
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
                          <img
                            src="/assets/paypal.png"
                            alt=""
                            className="w-14"
                          />
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                    <InputWrapper
                      label="Cardholder Name"
                      name="cardholderName"
                    />
                    <InputWrapper label="Card Number" name="cardNumber" />
                    <InputWrapper
                      label="Expiration Date (MM/YY)"
                      name="expirationDate"
                    />
                    <InputWrapper label="CVV" name="cvv" />
                    <div className="order-2 md:mt-2 sm:order-1 md:order-1 lg:order-1 ">
                      <CommonButton link="/checkout" label="Back to Shipping" isBackButton={true} />
                    </div>
                    <div className="order-1 sm:order-2 md:order-2 lg:order-2 sm:mt-2 md:mt-2 mt-2">
                      <CommonButton
                        link="/checkout/payment/review-order"
                        label="Review Order"
                        isValid={isValid}
                        dirty={dirty}
                      />
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
