import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";
import { EVENT_LIST_TYPE } from "@constants";
import StoreProvider from "@redux/store";

it("renders both All Events and Selected Events list", async () => {
  render(
    <StoreProvider>
      <Dashboard />
    </StoreProvider>
  );
  const allEventsText = await screen.findByText(EVENT_LIST_TYPE.ALL.title);
  const selectedEventsText = await screen.findByText(
    EVENT_LIST_TYPE.SELECTED.title
  );
  expect(allEventsText).toBeInTheDocument();
  expect(selectedEventsText).toBeInTheDocument();
});
