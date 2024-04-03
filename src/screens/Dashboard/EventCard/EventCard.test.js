import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EventCard from "./EventCard";
import { EVENT_LIST_TYPE } from "@constants";
import { formatDate } from "@helpers";

const renderComponent = (props) => {
  const type = EVENT_LIST_TYPE.ALL;
  const mockItem = {
    event_name: "Event Name",
    event_category: "Event Category",
    start_time: "2023-11-20T10:00:00",
    end_time: "2023-11-20T12:00:00",
  };
  const mockActionFn = jest.fn();
  render(
    <EventCard
      type={type}
      item={mockItem}
      actionfn={mockActionFn}
      disableAction={props?.disableAction}
    />
  );
  return { mockItem, mockActionFn };
};

describe("EventCard component", () => {
  it("renders event details correctly", () => {
    const { mockItem } = renderComponent();
    const eventName = screen.getByText(mockItem.event_name);
    const eventCategory = screen.getByText(mockItem.event_category);
    const eventDate = screen.getByText(
      formatDate(mockItem.start_time, mockItem.end_time)
    );
    expect(eventName).toBeInTheDocument();
    expect(eventCategory).toBeInTheDocument();
    expect(eventDate).toBeInTheDocument();
  });

  it("calls action function when button is clicked", () => {
    const { mockActionFn, mockItem } = renderComponent();
    const actionButton = screen.getByRole("button");
    fireEvent.click(actionButton);
    expect(mockActionFn).toHaveBeenCalledWith(mockItem);
  });

  it("disables action button when disableAction is true", () => {
    renderComponent({ disableAction: true });
    const actionButton = screen.getByRole("button");

    expect(actionButton).toBeDisabled();
  });
});
