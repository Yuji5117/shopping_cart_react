import { rest } from "msw";

import { items } from "./store";

export const handlers = [
  rest.get("/items", (req, res, ctx) => {
    const selectedCategory = req.url.searchParams.get("category");

    if (selectedCategory === "All Items")
      return res(ctx.status(200), ctx.json(items));

    const filteredItems = items.filter(
      (item) => selectedCategory === item.category
    );

    return res(ctx.status(200), ctx.json(filteredItems));
  }),
];
