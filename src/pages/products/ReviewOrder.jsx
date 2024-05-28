import BoxWrapper from "../../components/BoxWrapper";
import Breadcrumb from "../../components/Breadcrumb";
import Headline from "../../components/Headline";
import InfoWrapper from "../../components/InfoWrapper";

const ReviewOrder = () => {
  const breadcrumbItems = [
    { label: "Checkout", link: "/checkout" },
    { label: "Payment Information", link: "/payment" },
    { label: "Review Order", link: "/review-order" },
  ];

  const shippingInfo = {
    name: "John Doe",
    address: "1234 Main St",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    country: "USA",
    phone: "(555) 555-5555",
  };

  const paymentInfo = {
    cardholderName: "John Doe",
    cardNumber: "**** **** **** 1234", // Masked card number
    expirationDate: "12/23",
  };

  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between pt-4 mt-3">
          <Headline title="Review" highlight={"Order"} />
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="grid grid-cols-3 gap-[30px] mt-[30px] mb-[30px] lg:mb-[90px]">
          <div className="lg:col-span-2 col-span-3 mt-6">
            <div className="info mb-5">
              <BoxWrapper>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold mb-4 text-secondary">
                    Shipping Information
                  </h3>
                  <button className="font-semibold text-sm text-primary">
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <InfoWrapper label="Name" input={shippingInfo.name} />
                  <InfoWrapper label="Address" input={shippingInfo.address} />
                  <InfoWrapper label="City" input={shippingInfo.city} />
                  <InfoWrapper
                    label="State/Province"
                    input={shippingInfo.state}
                  />
                  <InfoWrapper label="Zip Code" input={shippingInfo.zip} />
                  <InfoWrapper label="Country" input={shippingInfo.country} />
                  <InfoWrapper
                    label="Phone Number"
                    input={shippingInfo.phone}
                  />
                </div>
              </BoxWrapper>
            </div>
            <div className="info mb-5">
              <BoxWrapper>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold mb-4 text-secondary">
                    Payment Details
                  </h3>
                  <button className="font-semibold text-sm text-primary">
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <InfoWrapper
                    label="Cardholder Name"
                    input={paymentInfo.cardholderName}
                  />
                  <InfoWrapper
                    label="Card Number"
                    input={paymentInfo.cardNumber}
                  />
                  <InfoWrapper
                    label="Expiration Date"
                    input={paymentInfo.expirationDate}
                  />
                </div>
              </BoxWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewOrder;
