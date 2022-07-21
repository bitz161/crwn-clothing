import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { Routes, Route } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { MessageContext } from "../../contexts/empty-message.context";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const { message } = useContext(MessageContext);
  return (
    <div className="cart-dropdown-container">
      {message && <div className="empty-message">Your cart is empty</div>}
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>

      <Link to="cart">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
