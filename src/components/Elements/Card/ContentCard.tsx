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
      <MainContainer>
        <ImageContainer>
          <img src={sourceUrl} alt="" height="180px" width="230" />
        </ImageContainer>
        <TitleContainer>{title}</TitleContainer>
        <DescriptionContainer>
          <p>{description}</p>
        </DescriptionContainer>
        <div>
          <div>★ 4.0</div>
          <Button styleType="primary">Add to cart</Button>
        </div>
      </MainContainer>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 250px;
  height: 300px;
  background-color: #ededec;
`;

const MainContainer = styled.div`
  text-align: center;
`;

const ImageContainer = styled.div`
  height: 180px;
  width: 100%;
`;

const TitleContainer = styled.div``;
const DescriptionContainer = styled.div``;
