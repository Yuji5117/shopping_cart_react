import styled from "styled-components";

import { Button } from "./Elements/Button";

import { Item } from "@/types";

type CartItemProps = Pick<Item, "title" | "sourceUrl" | "amount"> & {
  count: number;
  onClick: () => void;
};

export const CartItem = ({
  title,
  sourceUrl,
  amount,
  count,
  onClick,
}: CartItemProps) => {
  return (
    <CardItemContainer>
      <ImageContainer>
        <img src={sourceUrl} height="200px" />
      </ImageContainer>
      <CardContentContainer>
        <CardContent>
          <Title>
            <h3>{title}</h3>
          </Title>
          <Price>
            <p>{amount}円</p>
          </Price>
          <Count>{count}</Count>
        </CardContent>
        <ButtonContainer>
          <Button styleType="primary" onClick={onClick}>
            削除
          </Button>
        </ButtonContainer>
      </CardContentContainer>
    </CardItemContainer>
  );
};

const CardItemContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const ImageContainer = styled.div`
  height: 200px;
`;

const CardContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  font-size: 24px;
`;

const Price = styled.div`
  font-size: 16px;
`;

const Count = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
