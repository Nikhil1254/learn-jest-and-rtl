import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    // ctx means context
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Nikhil",
        },
        {
          name: "Manjunath",
        },
        {
          name: "Rushikesh",
        },
      ]),
    );
  }),
];
