import "jest-dom/extend-expect";

import React from "react";
import pkgB from "../";
import { render } from "react-testing-library";

test("we are in the real world", () => {
  expect(1).toBe(1);
  const { getByText } = render(<div>Test</div>);
  expect(getByText("Test")).toBeInTheDocument();
});

test("calls console.log", () => {
  const spy = jest.spyOn(console, "log");
  pkgB();
  expect(spy).toHaveBeenCalledTimes(2);
});
