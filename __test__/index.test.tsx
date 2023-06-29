import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Home from "../pages";
import { server } from "../mock/server";

describe("SampleComponent", () => {
  test("renders component correctly", () => {
    render(<Home />);
    const loadingElement = screen.getByText(/loading\.\.\./i);
    expect(loadingElement).toBeInTheDocument();
  });

  // test("renders error while fetching charatcer", async () => {
  //   server.use(
  //     rest.get("https://rickandmortyapi.com/api/character", (req, res, ctx) => {
  //       return res(ctx.status(500));
  //     })
  //   );
  //   render(<Home />);
  //   const error = await screen.findByText(/Error Fetchning users/i);
  //   expect(error).toBeInTheDocument();
  // });

  // test("renders error while fetching episode", async () => {
  //   server.use(
  //     rest.get("https://rickandmortyapi.com/api/episode", (req, res, ctx) => {
  //       return res(ctx.status(500));
  //     })
  //   );
  //   render(<Home />);
  //   const error = await screen.findByText(/Error Fetchning episode/i);
  //   expect(error).toBeInTheDocument();
  // });

  test("renders input filed correctly", () => {
    render(<Home />);
    const textElement = screen.getByRole("textbox");
    expect(textElement).toBeInTheDocument();
  });

  test("previous btn render correctly", () => {
    render(<Home />);
    const btnText = screen.getByRole("button", { name: /previous/i });
    expect(btnText).toBeInTheDocument();
  });

  test("next btn render correctly", () => {
    render(<Home />);
    const btnText = screen.getByRole("button", { name: /next/i });
    expect(btnText).toBeInTheDocument();
  });
});
