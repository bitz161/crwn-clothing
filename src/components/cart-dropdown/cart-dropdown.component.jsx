import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { MessageContext } from "../../contexts/empty-message.context";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> ec5d808bbb4ca549969088cf00f1d5d8a34d3f83

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const { message } = useContext(MessageContext);

  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  //change the current URL or modify the url for the extension

  return (
    <div className="cart-dropdown-container">
      {message && <div className="empty-message">Your cart is empty</div>}
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
<<<<<<< HEAD
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
=======
      <Button>GO TO CHECKOUT</Button>
>>>>>>> ec5d808bbb4ca549969088cf00f1d5d8a34d3f83
    </div>
  );
};

export default CartDropdown;
