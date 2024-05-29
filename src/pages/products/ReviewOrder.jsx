import React, { useState } from "react";
import BoxWrapper from "../../components/BoxWrapper";
import Breadcrumb from "../../components/Breadcrumb";
import Headline from "../../components/Headline";
import InfoWrapper from "../../components/InfoWrapper";
import SimpleButton from "../../components/SimpleButton";
import CommonDialog from "../../components/CommonDialog";
import CheckoutBox from "../../components/CheckoutBox";
import PaymentBox from "../../components/PaymentBox";
import CartWrapper from "../../components/Cart/CartWrapper";
import CartBox from "../../components/Cart/CartBox";
import CommonButton from "../../components/CommonButton";
import { products } from "../../db/data";

const ReviewOrder = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editSection, setEditSection] = useState(null);
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
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap pt-4 mt-3">
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
                  <SimpleButton
                    label={"Edit"}
                    setIsDialogOpen={() => {
                      setEditSection("shipping");
                      setIsDialogOpen(true);
                    }}
                  />
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
                  <SimpleButton
                    label={"Edit"}
                    setIsDialogOpen={() => {
                      setEditSection("payment");
                      setIsDialogOpen(true);
                    }}
                  />
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
          <div className="lg:col-span-1 col-span-3 md:mt-6">
            <div>
              <BoxWrapper>
                <h3 className="text-lg font-semibold mb-4 text-secondary">
                  Order Summary
                </h3>
                <div className="text-sm">

                <InfoWrapper label={"Sub-total"} input={"$80"} />
                <InfoWrapper label={"Delivery Charges"} input={"$80"} />
                <InfoWrapper label={"Total Payment"} input={"$160"} />
                </div>

                <hr className="my-3" />
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-secondary">
                    In Your Cart
                  </h3>
                  <SimpleButton
                    label={"Edit"}
                    setIsDialogOpen={() => {
                      setEditSection("cart");
                      setIsDialogOpen(true);
                    }}
                  />
                </div>
                {products.map((product) => (
                  <React.Fragment key={product.id}>
                    <CartWrapper product={product}>
                      <div className="flex flex-1  justify-between text-sm">
                        <div className="flex items-center">
                          <div className="text-gray-600  pr-3">
                            Qty: {product.quantity}
                          </div>
                        </div>
                      </div>
                    </CartWrapper>
                  </React.Fragment>
                ))}
            <CommonButton link="#" label="Place Order" />
              </BoxWrapper>
            </div>
          </div>
        </div>
        <CommonDialog open={isDialogOpen} setOpen={setIsDialogOpen}>
          {editSection === "shipping" && <CheckoutBox />}
          {editSection === "payment" && <PaymentBox />}
          {editSection === "cart" && (
            <div className="w-full">
              <h3 className="text-lg font-medium text-primary capitalize leading-7 pb-3">
                Edit Your Cart
              </h3>
              {products.map((product) => (
                <React.Fragment key={product.id}>
                  <CartBox product={product} />
                </React.Fragment>
              ))}
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-secondary mb-2">
                  <p>Subtotal</p>
                  <p>$262.00</p>
                </div>
                <div className="flex justify-between text-base font-medium text-secondary mb-2">
                  <p>VAT</p>
                  <p>$20</p>
                </div>
                <div className="flex justify-between text-base font-medium text-primary">
                  <p>Total</p>
                  <p>$2620.00</p>
                </div>
                <div className="mt-6">
                  <CommonButton label={"Checkout"} link={"/checkout"} />
                </div>
                
              </div>
            </div>
          )}
        </CommonDialog>
      </div>
    </>
  );
};

export default ReviewOrder;
