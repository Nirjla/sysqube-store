import { Form, Formik, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { provinces } from "../db/data";
import CommonButton from "./CommonButton";
import InputWrapper from "./InputWrapper";
import SelectWrapper from "./SelectWrapper";
import { shippingValidationSchema } from "../schemas/validationSchema";
import { useProgress } from "../constants";
import Cart from "../pages/products/Cart";

const CheckoutBox = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: provinces[0].id,
    zipCode: "",
    country: "",
    phone: "",
  };

  const FormObserver = () => {
    const { values } = useFormikContext();
    const { setProgress } = useProgress();

    useEffect(() => {
      const filledFields = Object.values(values).filter((value) => !!value);
      const progress = (filledFields.length / Object.keys(values).length) * 50; // Assuming 25% progress for shipping details completion
      setProgress(progress);
    }, [values, setProgress]);

    return null;
  };

  return (
    <>
      <div className="checkout w-full">
        <Formik
          initialValues={initialValues}
          validationSchema={shippingValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
              <FormObserver />
              <div className="grid grid-cols-3 gap-[30px] mb-[30px] lg:mb-[90px]">
                <div className="lg:col-span-3 col-span-3">
                  <div className="customer-details">
                    <div>
                      <h3 className="text-lg font-medium text-primary pb-3">
                        Shipping Information
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <InputWrapper label="First Name" name="firstName" />
                      <InputWrapper label="Last Name" name="lastName" />
                      <InputWrapper label="Address" name="address" />
                      <InputWrapper label="City" name="city" />
                      <SelectWrapper
                        label="State/Province"
                        name="state"
                        data={provinces}
                      />
                      <InputWrapper label="Zip Code" name="zipCode" />
                      <InputWrapper label="Country" name="country" />
                      <InputWrapper
                        label="Phone Number"
                        name="phone"
                        type="tel"
                      />
                      <div className="order-2 sm:order-1 md:mt-2 md:order-1 lg:order-1 ">
                        <CommonButton
                          label="Back to Cart"
                          toggle={toggleCart}
                          isBackButton={true}
                        />
                      </div>
                      <div className="order-1 sm:order-2 md:order-2 lg:order-2 sm:mt-2 md:mt-2 mt-2 ">
                        <CommonButton
                          link="/checkout/payment"
                          label="Proceed to Payment"
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
      <Cart toggleCart={toggleCart} isCartOpen={isCartOpen} />
    </>
  );
};

export default CheckoutBox;
