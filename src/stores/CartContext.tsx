import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { Item } from "@/types";

type CartContextType = {
  cartItems: Item[];
  cartItemsCount: number;
  addToCart: (item: Item) => void;
  removeFromCart: (itemId: number) => void;
};

export const cartContext = createContext<CartContextType>({
  cartItems: [],
  cartItemsCount: 0,
  addToCart: () => undefined,
  removeFromCart: () => undefined,
});

export const useCartContext = () => useContext(cartContext);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const cartItemsCount = cartItems.reduce((prev, current) => {
    return prev + current.totalCount;
  }, 0);

  const addToCart = (item: Item) => {
    const hasItem = cartItems.some((cartItem) => item.id === cartItem.id);

    if (hasItem) {
      const newCartItems = cartItems.map((cartItem) => {
        if (item.id !== cartItem.id) return cartItem;
        return { ...cartItem, totalCount: cartItem.totalCount + 1 };
      });
      setCartItems(newCartItems);
    } else {
      const newItem = { ...item, totalCount: 1 };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    }
  };

  const removeFromCart = (itemId: number) => {
    const newCartItems = cartItems.filter((item) => itemId !== item.id);

    setCartItems(newCartItems);
  };

  return (
    <cartContext.Provider
      value={{ cartItems, cartItemsCount, addToCart, removeFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
};
