import { useCartContext } from "@/stores/CartContext";

export const Cart = () => {
  const { cartItems } = useCartContext();

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
