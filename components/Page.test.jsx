import { fireEvent, render, screen } from "@testing-library/react";
import Page from "./Page";

test("test greeting", async () => {
  render(<Page/>); 

  fireEvent.click(screen.getByText("Load Greeting"));

  await screen.findByRole("heading", { name: "Hi!" });
});
