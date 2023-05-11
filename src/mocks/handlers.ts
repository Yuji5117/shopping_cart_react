import { rest } from "msw";

export const handlers = [
  rest.get("/items", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        sourceUrl: "src/assets/images/macbook.jpg",
        title: "MacBook Pro",
        description: "This is an amaizng laptop",
      })
    );
  }),
];
