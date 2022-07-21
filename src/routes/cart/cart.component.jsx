import LeftArrowIcon from "../../components/arrow/arrow-icon.component";
import Remove from "../../components/arrow/remove.component";
import RightArrowIcon from "../../components/arrow/right-icon.component";
import "./cart.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const Cart = () => {
  const { CartItem } = useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="cart-item-container">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <div className="cart-item-container">
        <img alt="" />
        <span>Black Converse</span>
        <LeftArrowIcon className="arrowIcon" /> 0
        <RightArrowIcon className="arrowIcon" />
        <span>110</span>
        <Remove className="arrowIcon" />
      </div>
    </div>
  );
};

export default Cart;
