export type Item = {
  id: number;
  sourceUrl: string;
  title: string;
  amount: number;
  description: string;
  category: string;
  totalCount: number;
};

export type CategoryType = "All Items" | "mens clothing" | "laptop" | "others";
