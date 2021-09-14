import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../pages";

describe('Home', () => {

  it('should render welcome message', () => {
    render(<Home/>)

    const heading = screen.getByRole('heading', {
      name: /Hello, World!/i
    });

    expect(heading).toBeInTheDocument();
  });
});