import CommonButton from "../../components/CommonButton";
import Headline from "../../components/Headline";
import InputWrapper from "../../components/InputWrapper";

const Payment = () => {
  return (
    <>
      <div className="container">
        <Headline title={"Payment"} highlight={"Details"} />
        <form action="">
          <div className="grid grid-cols-3 gap-[30px] mt-[30px] mb-[30px] lg:mb-[90px]">
            <div className="lg:col-span-1 col-span-2 mt-6">
              <ul>
                <li>Credit Card</li>
              </ul>
            </div>
            <div className="lg:col-span-2 col-span-3 mt-6">
              <div className="grid grid-cols-1 gap-4">
                <InputWrapper label="Cardholder Name" name="cardholder-name" />
                <InputWrapper label="Card Number" name="card-number" />
                <div className="grid grid-cols-2 gap-4 ">
                  <InputWrapper
                    label="Expiration Date (MM/YY)"
                    name="expiration-date"
                  />
                  <InputWrapper label="CVV" name="cvv" />
                  <div className="mt-2">
                    <CommonButton
                      label={"Back to Shipping"}
                      link={"/checkout"}
                    />
                  </div>
                  <div className="mt-2">
                    <CommonButton label={"Review Order"} link={""} />
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
