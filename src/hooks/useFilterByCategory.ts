import { useState } from "react";
import { useQuery } from "react-query";

import { getItems } from "@/api";
import { CategoryType, Item } from "@/types";

export const useFilterByCategory = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("All Items");
  const { data, isLoading } = useQuery<Item[]>(
    ["items", selectedCategory],
    () => getItems(selectedCategory)
  );

  const changeSelectedCategory = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  return { selectedCategory, data, isLoading, changeSelectedCategory };
};
