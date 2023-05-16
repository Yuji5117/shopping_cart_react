import { Link } from "react-router-dom";
import styled from "styled-components";

import { useCartContext } from "@/stores/CartContext";

export const Header = () => {
  const { cartItemsCount } = useCartContext();
  return (
    <StyledHeader>
      <HeaderWrpper>
        <LogoContainer>
          <Link to="/">Easy Shop</Link>
        </LogoContainer>
        <HeaderRightContainer>
          <CartAncher>
            <Link to="./cart">Cart</Link>
            <p>{cartItemsCount}</p>
          </CartAncher>
        </HeaderRightContainer>
      </HeaderWrpper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 64px;
  background-color: #fff;
`;

const HeaderWrpper = styled.div`
  height: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div``;

const HeaderRightContainer = styled.div`
  display: flex;
`;

const CartAncher = styled.div`
  padding-left: 20px;
`;
