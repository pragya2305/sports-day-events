import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EventsList from "./EventsList";
import { EVENT_LIST_TYPE } from "@constants";

const renderComponent = (
  response = {
    data: [],
    isError: false,
    isLoading: false,
    isSuccess: true,
    isFetching: false,
  }
) => {
  const useService = jest.fn();
  useService.mockReturnValue(response);
  render(<EventsList type={EVENT_LIST_TYPE.ALL} useService={useService} />);
};

describe("EventsList component", () => {
  it("renders title correctly", () => {
    renderComponent();
    const title = screen.getByText("All Events");
    expect(title).toBeInTheDocument();
  });

  it('renders "No events" message when events array is empty', () => {
    renderComponent({
      data: [],
      isError: false,
      isLoading: false,
      isSuccess: true,
      isFetching: false,
    });

    const noEventsMsg = screen.getByText(/You have no events/i);
    expect(noEventsMsg).toBeInTheDocument();
  });

  it("renders event cards when events array is not empty", () => {
    const events = [
      {
        id: "17",
        event_name: "10M Air Rifle",
        event_category: "Shooting",
        start_time: "2022-12-17 17:00:00",
        end_time: "2022-12-17 18:00:00",
      },
      {
        id: "4",
        event_name: "High Jump",
        event_category: "Athletics",
        start_time: "2022-12-17 13:00:00",
        end_time: "2022-12-17 14:00:00",
      },
    ];

    renderComponent({
      data: events,
      isError: false,
      isLoading: false,
      isSuccess: true,
      isFetching: false,
    });

    const event1 = screen.getByText("10M Air Rifle");
    const event2 = screen.getByText("High Jump");

    expect(event1).toBeInTheDocument();
    expect(event2).toBeInTheDocument();
  });

  it('renders "Loading More..." message when fetching more events', () => {
    renderComponent({
      data: [],
      isError: false,
      isLoading: false,
      isSuccess: false,
      isFetching: true,
    });
    const loadMore = screen.getByText(/loading more/i);
    expect(loadMore).toBeInTheDocument();
  });

  it("renders technical error component when there is an error", () => {
    renderComponent({
      data: [],
      isError: true,
      isLoading: false,
      isSuccess: false,
      isFetching: false,
    });
    const error = screen.getByText(/Technical Error/i);
    expect(error).toBeInTheDocument();
  });

  it("renders loader component when loading", () => {
    renderComponent({
      data: [],
      isError: false,
      isLoading: true,
      isSuccess: false,
      isFetching: false,
    });
    const loader = screen.getByRole("progressbar");
    expect(loader).toBeInTheDocument();
  });
});
