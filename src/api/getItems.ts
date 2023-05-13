import axios from "axios";

import { CategoryType } from "@/types";

export const getItems = async (category: CategoryType = "All Items") => {
  const res = await axios.get("/items", {
    params: {
      category,
    },
  });
  return res.data;
};
