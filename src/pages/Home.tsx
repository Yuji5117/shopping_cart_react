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
    <div>
      <CategoryContainer>
        {Categories.map((category) => (
          <div key={category}>
            <Tag styleType="default">{category}</Tag>
          </div>
        ))}
      </CategoryContainer>
      <div>
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
      </div>
    </div>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
`;
