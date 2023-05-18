import { CartItem } from "@/components/CartItem";
import { TotalPrice } from "@/components/TotalPrice";
import { useCartContext } from "@/stores/CartContext";

export const Cart = () => {
  const { cartItems } = useCartContext();

  if (!cartItems.length) return <div>カートに商品がありません。</div>;

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              title={item.title}
              sourceUrl={item.sourceUrl}
              amount={item.amount}
              totalCount={item.totalCount}
            />
          </li>
        ))}
      </ul>
      <TotalPrice />
    </div>
  );
};
