import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { MessageContext } from "../../contexts/empty-message.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart, cartItems } = useContext(CartContext);
  const { message, SetMessage } = useContext(MessageContext);

  const addProducToCart = () => addItemToCart(product);

  const handleMessage = () => {
    cartItems.length >= 0 ? SetMessage(false) : SetMessage(true);
  };

  const multipleHandle = () => {
    addProducToCart();
    handleMessage();
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={multipleHandle}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
