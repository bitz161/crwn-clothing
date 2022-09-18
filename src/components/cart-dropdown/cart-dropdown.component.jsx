import Button from "../button/button.component";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  //change the current URL or modify the url for the extension

  return (
    <CartDropDownContainer>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
      ) : (
        <EmptyMessage>You cart is empty</EmptyMessage>
      )}
      <CartItems></CartItems>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
