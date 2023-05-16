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

  const cartItemsCount = cartItems.length;

  const addToCart = useCallback((item: Item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  }, []);

  const removeFromCart = useCallback((itemId: number) => {
    const newCartItems = cartItems.filter((item) => itemId !== item.id);

    setCartItems(newCartItems);
  }, []);

  return (
    <cartContext.Provider
      value={{ cartItems, cartItemsCount, addToCart, removeFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
};
