import { Tag } from "./Elements/Tag";

import { CategoryType } from "@/types";
import { CATEGORIES } from "@/utils";

type CategoryListProps = {
  selectedCategory: CategoryType;
  changeSelectedCategory: (category: CategoryType) => void;
};

export const CategoryList = ({
  selectedCategory,
  changeSelectedCategory,
}: CategoryListProps) => {
  return (
    <>
      {CATEGORIES.map((category) => (
        <div key={category}>
          <Tag
            styleType={category === selectedCategory ? "selected" : "default"}
            onClick={() => changeSelectedCategory(category)}
          >
            {category}
          </Tag>
        </div>
      ))}
    </>
  );
};
