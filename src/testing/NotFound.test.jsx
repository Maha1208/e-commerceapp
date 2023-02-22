import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "../components/notFound/NotFound";

describe("NotFound", () => {
  it("should render an image with alt text '404'", () => {
    render(<NotFound />);
    const image = screen.getByAltText("404");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toEqual("/Images/notfound.webp");
  });
});