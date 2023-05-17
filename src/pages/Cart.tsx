import { CartItem } from "@/components/CartItem";
import { useCartContext } from "@/stores/CartContext";

export const Cart = () => {
  const { cartItems, removeFromCart } = useCartContext();

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              title={item.title}
              sourceUrl={item.sourceUrl}
              amount={item.amount}
              totalCount={item.totalCount}
              onClick={() => removeFromCart(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
