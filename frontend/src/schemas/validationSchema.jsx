import * as Yup from "yup";

export const shippingValidationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Last Name is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State/Province is required"),
  zipCode: Yup.string()
    .matches(/^\d{5}(-\d{4})?$/, "Invalid Zip Code")
    .required("Zip Code is required"),
  country: Yup.string().required("Country is required"),
  phone: Yup.string()
    .matches(
      /^(\+\d{1,2}\s?)?1?\-?\s?\(?\d{3}\)?\s?-?\d{3}\s?-?\d{4}$/,
      "Invalid Phone Number"
    )
    .required("Phone Number is required"),
});

export const paymentValidationSchema = Yup.object({
  cardholderName: Yup.string().required("Cardholder Name is required"),
  cardNumber: Yup.string()
    .matches(/^[0-9]{16}$/, "Card Number must be 16 digits")
    .required("Card Number is required"),
  expirationDate: Yup.string()
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      "Invalid Expiration Date (MM/YY)"
    )
    .required("Expiration Date is required"),
  cvv: Yup.string()
    .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
});
