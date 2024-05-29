import { Form, Formik } from "formik";
import { provinces } from "../db/data";
import CommonButton from "./CommonButton";
import InputWrapper from "./InputWrapper";
import SelectWrapper from "./SelectWrapper";
import { shippingValidationSchema } from "../schemas/validationSchema";

const CheckoutBox = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  };
  return (
    <div className="checkout w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={shippingValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="grid grid-cols-3 gap-[30px]  mb-[30px] lg:mb-[90px]">
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
                    <div className="sm:mt-2 md:mt-2">
                      <CommonButton link="/cart" label="Back to Cart" />
                    </div>
                    <div className="md:mt-2">
                      <CommonButton
                        link="/payment"
                        label="Proceed to Payment"
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

export default CheckoutBox;
