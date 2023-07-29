import { render, screen } from "@testing-library/react";
import Users from "../components/users/Users";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);

    const headingElement = screen.getByRole("heading", {
      name: "Users",
    });
    expect(headingElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);

    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("renders error message", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        },
      ),
    );
    render(<Users />);

    const errorElement = await screen.findByText("Error fetching users!");
    expect(errorElement).toBeInTheDocument();
  });
});
