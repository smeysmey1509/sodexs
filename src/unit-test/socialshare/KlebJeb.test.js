import { render } from "@testing-library/react";
import React from "react";
import KlebJeb from "../../components/KlebJeb";

test("KlebJeb", () => {
  const { getByText } = render(<KlebJeb />);
  const klebJebElement = getByText(15);
  expect(klebJebElement).toBeInTheDocument();
});
