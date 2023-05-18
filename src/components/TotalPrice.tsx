import { Link } from "react-router-dom";
import styled from "styled-components";

import { useCartContext } from "@/stores/CartContext";

export const TotalPrice = () => {
  const { subTotalAmount, totalAmount } = useCartContext();
  return (
    <>
      <div>
        <Text>商品の小計: {subTotalAmount}円</Text>
      </div>
      <div>
        <Text>税金: {totalAmount - subTotalAmount}円</Text>
      </div>
      <div>
        <TotalPriceText>合計金額: {totalAmount}円</TotalPriceText>
      </div>
      <div>
        <Link to="/">レジに進む</Link>
      </div>
    </>
  );
};

const Text = styled.p`
  font-size: 18px;
`;
const TotalPriceText = styled.p`
  font-size: 24px;
`;
