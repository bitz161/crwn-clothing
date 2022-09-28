import { createContext, useState, useEffect, useReducer } from "react";

//add item in cart and quantity
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cartItem/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//remove item in the cart
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

//decrement and remove cart incase cart is in 0(zero) quantity
const removeItemToCart = (cartItems, cartItemtoRemove) => {
  //find item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemtoRemove.id
  );

  //check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemtoRemove.id);
  }

  //return back cartitems with maching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemtoRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCardOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

const INITIAL_STATE = {
  isCardOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CardProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  //total in checkout-item
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const updateCartItemsReducer = (newCartItems) => {};

  const addItemToCart = (productToAdd) => {
    const newCartItems = setCartItem(addCartItem(cartItems, productToAdd));
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (cartItemtoRemove) => {
    const newCartItems = setCartItem(
      removeItemToCart(cartItems, cartItemtoRemove)
    );
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = setCartItem(clearCartItem(cartItems, cartItemToClear));
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItem,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
