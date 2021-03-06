import React from "react-router-dom";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
} from "./checkout.styles";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe.component";

const CheckoutPage = ({ cartItems, total }) => {
  let [month, , year] = new Date().toLocaleString("en-US").split("/");

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        
      ))}
      <TotalContainer>
        <span>TOTAL: ${total}</span>
      </TotalContainer>

      <TestWarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp:{month}/{year.substring(2, 4)} - CVV:123
      </TestWarningContainer>

      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
