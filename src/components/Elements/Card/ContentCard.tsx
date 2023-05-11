import styled from "styled-components";

import { Button } from "../Button";

type ContentCardProps = {
  sourceUrl: string;
  title: string;
  description: string;
};

export const ContentCard = ({
  sourceUrl,
  title,
  description,
}: ContentCardProps) => {
  return (
    <CardWrapper>
      <ImageContainer>
        <StyledImage src={sourceUrl} alt="" />
      </ImageContainer>
      <BodyContainer>
        <div>{title}</div>
        <DescriptionContainer>
          <p>{description}</p>
        </DescriptionContainer>
        <FooterContainer>
          <div>★ 4.0</div>
          <Button styleType="primary">Add to cart</Button>
        </FooterContainer>
      </BodyContainer>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 220px;
  height: 300px;
  background-color: white;
  box-shadow: 6px 6px 7px #ccc;
`;

const BodyContainer = styled.div`
  text-align: center;
  padding: 10px;
`;

const ImageContainer = styled.div`
  height: 180px;
  width: 100%;
`;

const StyledImage = styled.img`
  height: 180px;
  width: 210px;
  object-fit: contain;
`;

const DescriptionContainer = styled.div`
  padding-top: 10px;
`;

const FooterContainer = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
