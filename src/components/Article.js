import { render, screen } from '@testing-library/react';
import React from "react";

function Article() {
  return (
    <div>
      please pass this test
    </div>
  );
}

export default Article;

test("displays the text 'please pass this test'", () => {
  render (<Article />);

  const element = screen.queryByText("please pass this test");

  screen.debug(element);

  expect(element).toBeInTheDocument();
});