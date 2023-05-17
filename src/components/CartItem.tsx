import styled from "styled-components";

import { Button } from "./Elements/Button";
import { SelectField } from "./Elements/Form/SelectField";

import { Item } from "@/types";

type CartItemProps = Omit<Item, "description" | "category"> & {
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>, itemId: number) => void;
};

const options = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
];

export const CartItem = ({
  id,
  title,
  sourceUrl,
  amount,
  totalCount,
  onClick,
  onChange,
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
            <p>{amount * totalCount}円</p>
          </Price>
          <Count>
            <SelectField
              label="商品選択数"
              options={options}
              defaultValue={totalCount}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChange(e, id)
              }
            />
          </Count>
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
