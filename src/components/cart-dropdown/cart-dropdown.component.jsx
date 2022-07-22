import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { MessageContext } from "../../contexts/empty-message.context";

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
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
