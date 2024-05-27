import Breadcrumb from "../../components/Breadcrumb";
import CommonButton from "../../components/CommonButton";
import Headline from "../../components/Headline";
import InputWrapper from "../../components/InputWrapper";

const Checkout = () => {
  const breadcrumbItems = [{ label: "Checkout", link: "/checkout" }];
  return (
    <>
      <div className="container">
        <div className="flex justify-between items-center">
          <Headline title="Checkout" />
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="checkout">
          <form action="">
            <div className="grid grid-cols-3 gap-[30px] mt-[30px] mb-[30px] lg:mb-[90px]">
              <div className="lg:col-span-2 col-span-3 mt-6">
                <div className="customer-details">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Shipping Information
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <InputWrapper label="First Name" name="firstName" />
                    <InputWrapper label="Last Name" name="lastName" />
                    <InputWrapper label="Address" name="address" />
                    <InputWrapper label="City" name="city" />
                    <InputWrapper label="State/Province" name="state" />
                    <InputWrapper label="Zip Code" name="zipCode" />
                    <InputWrapper label="Country" name="country" />
                    <InputWrapper
                      label="Phone Number"
                      name="phone"
                      type="tel"
                    />
                    <div className="mt-2">
                      <CommonButton link="/cart" label="Back to Cart" />
                    </div>
                    <div className="mt-2">
                      <CommonButton link="/cart" label="Proceed to Payment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
