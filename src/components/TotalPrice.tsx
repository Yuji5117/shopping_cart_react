import { useCartContext } from "@/stores/CartContext";

export const TotalPrice = () => {
  const { subTotalAmount, totalAmount } = useCartContext();
  return (
    <div>
      <div>Subtotal: {subTotalAmount}円</div>
      <div>Taxes: {totalAmount - subTotalAmount}円</div>
      <div>Total: {totalAmount}円</div>
    </div>
  );
};
