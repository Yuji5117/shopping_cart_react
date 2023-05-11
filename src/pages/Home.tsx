import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { ContentCard } from "@/components/Elements/Card";
import { Tag } from "@/components/Elements/Tag";

const Categories = ["All Items", "mens clothing", "laptop", "others"];

type Item = {
  sourceUrl: string;
  title: string;
  description: string;
};

export const Home = () => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const getItems = async () => {
      const res = await axios.get("/items");

      setItems(res.data);
    };
    getItems();
  }, []);
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
        {items.map((item) => (
          <div key={item.title}>
            <ContentCard
              sourceUrl={item.sourceUrl}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
`;
