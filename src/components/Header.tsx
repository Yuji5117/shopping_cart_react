import { Link } from "react-router-dom";
import styled from "styled-components";

import { InputField } from "./Elements/Form";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrpper>
        <LogoContainer>
          <Link to="/">Easy Shop</Link>
        </LogoContainer>
        <HeaderRightContainer>
          <div>
            <InputField />
          </div>
          <CartAncher>
            <Link to="./cart">Cart</Link>
          </CartAncher>
        </HeaderRightContainer>
      </HeaderWrpper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 64px;
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
