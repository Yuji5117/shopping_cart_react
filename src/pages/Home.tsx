import styled from "styled-components";

import { ContentCard } from "@/components/Elements/Card";
import { Tag } from "@/components/Elements/Tag";

const Categories = ["All Items", "mens clothing", "laptop", "others"];

export const Home = () => {
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
        <ContentCard
          sourceUrl="src/assets/images/macbook.jpg"
          title="MacBook Pro"
          description="Pc......"
        />
      </div>
    </div>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
`;
