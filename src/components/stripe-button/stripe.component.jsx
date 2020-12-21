import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //It converts dollar into cents, Stripe needs this.
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I0Z7fGuaiNNXrnbl69snEb60e23RyFJikVK4cpX4CHtWumweN0qNIlRl59aTu7rXEi0unalYpFBt0EN33hZJ7zn00Uq9jD7Td";
  //On success callback function
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
