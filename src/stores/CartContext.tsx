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
};

export const cartContext = createContext<CartContextType>({
  cartItems: [],
  cartItemsCount: 0,
  addToCart: () => undefined,
});

export const useCartContext = () => useContext(cartContext);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const cartItemsCount = cartItems.length;

  const addToCart = (item: Item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  // const removeFromCart = (itemId) => {};

  return (
    <cartContext.Provider value={{ cartItems, cartItemsCount, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};
