import styled from "styled-components";

import { CartItem } from "@/components/CartItem";
import { TotalPrice } from "@/components/TotalPrice";
import { useCartContext } from "@/stores/CartContext";

export const Cart = () => {
  const { cartItems } = useCartContext();

  if (!cartItems.length) return <div>カートに商品がありません。</div>;

  return (
    <CartWrapper>
      <CartContaner>
        <ItemList>
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
        </ItemList>

        <TotalPriceWrapper>
          <TotalPriceContainer>
            <TotalPrice />
          </TotalPriceContainer>
        </TotalPriceWrapper>
      </CartContaner>
    </CartWrapper>
  );
};

const CartWrapper = styled.div``;

const CartContaner = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
`;

const ItemList = styled.ul`
  flex-grow: 2;
`;

const TotalPriceWrapper = styled.div`
  flex-grow: 1;
  height: 360px;
`;

const TotalPriceContainer = styled.div`
  margin: 20px;

  > * + * {
    margin-top: 30px;
  }
`;
