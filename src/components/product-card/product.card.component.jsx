import "./product-card.styles.scss";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);

  const addProducToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProducToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
