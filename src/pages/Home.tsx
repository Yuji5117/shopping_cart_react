import styled from "styled-components";

import { InputField } from "@/components/Elements/Form";
import { Tag } from "@/components/Elements/Tag";
import { ItemList } from "@/components/ItemList";
import { useFilterByCategory, useSearchTitleByKeyword } from "@/hooks";
import { CategoryType } from "@/types";

const Categories: CategoryType[] = [
  "All Items",
  "mens clothing",
  "laptop",
  "others",
];

export const Home = () => {
  const { selectedCategory, data, isLoading, changeSelectedCategory } =
    useFilterByCategory();
  const { keyword, onChangeKeyword, filteredItems } =
    useSearchTitleByKeyword(data);

  return (
    <HomeWrapper>
      <MainContainer>
        <InputField type="text" onChange={(e) => onChangeKeyword(e)} />
        <CategoryContainer>
          {Categories.map((category) => (
            <div key={category}>
              <Tag
                styleType={
                  category === selectedCategory ? "selected" : "default"
                }
                onClick={() => changeSelectedCategory(category)}
              >
                {category}
              </Tag>
            </div>
          ))}
        </CategoryContainer>
        <CardsContainer>
          <ItemList
            items={keyword === "" ? data : filteredItems}
            isLoading={isLoading}
          />
        </CardsContainer>
      </MainContainer>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
`;

const MainContainer = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;
  padding-bottom: 70px;
`;

const CategoryContainer = styled.div`
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
