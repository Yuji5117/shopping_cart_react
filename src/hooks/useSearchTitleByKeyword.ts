import { useState } from "react";

import { Item } from "@/types";

export const useSearchTitleByKeyword = (items: Item[] = []) => {
  const [keyword, setKeyword] = useState<string>("");

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return { keyword, onChangeKeyword, filteredItems };
};
