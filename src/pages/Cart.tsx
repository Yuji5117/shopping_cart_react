import { CartItem } from "@/components/CartItem";
import { useCartContext } from "@/stores/CartContext";

export const Cart = () => {
  const { cartItems, removeFromCart } = useCartContext();

  if (!cartItems.length) return <div>カートに商品がありません。</div>;

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
