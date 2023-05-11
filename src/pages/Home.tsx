import { useQuery } from "react-query";
import styled from "styled-components";

import { getItems } from "@/api";
import { ContentCard } from "@/components/Elements/Card";
import { Tag } from "@/components/Elements/Tag";
import { Item } from "@/types";

const Categories = ["All Items", "mens clothing", "laptop", "others"];

export const Home = () => {
  const query = useQuery<Item[]>("items", getItems);

  return (
    <HomeWrapper>
      <MainContainer>
        <CategoryContainer>
          {Categories.map((category) => (
            <div key={category}>
              {category === "All Items" ? (
                <Tag styleType="selected">{category}</Tag>
              ) : (
                <Tag styleType="default">{category}</Tag>
              )}
            </div>
          ))}
        </CategoryContainer>
        <CardsContainer>
          {query.isLoading ? (
            <div>Loading ...</div>
          ) : (
            query.data?.map((item) => (
              <div key={item.id}>
                <ContentCard
                  sourceUrl={item.sourceUrl}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))
          )}
        </CardsContainer>
      </MainContainer>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
  background-color: #eaebef;
`;

const MainContainer = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

const CategoryContainer = styled.div`
  padding-top: 50px;
  display: flex;
  column-gap: 10px;
  justify-content: center;
`;

const CardsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 30px 20px;
  flex-wrap: wrap;
  text-align: center;
`;
