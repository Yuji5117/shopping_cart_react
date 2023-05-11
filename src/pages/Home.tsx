import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { ContentCard } from "@/components/Elements/Card";
import { Tag } from "@/components/Elements/Tag";
import { Item } from "@/types";

const Categories = ["All Items", "mens clothing", "laptop", "others"];

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
          <div key={item.id}>
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
