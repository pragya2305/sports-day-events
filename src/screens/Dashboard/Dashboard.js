import React from "react";
import { SplitScreen } from "@components";
import { useGetUserEventsQuery } from "@redux/api/events/api";
import EventsList from "./EventsList";
import { EVENT_LIST_TYPE } from "@constants";
import {
  useRemoveEventService,
  useAddEventService,
  useLoadMore,
  useGetAllEventsService,
} from "@redux/service";

const Dashboard = () => {
  const { addUserEvent, disableAdding } = useAddEventService();
  const eventListRef = useLoadMore();

  const { removeUserEvent, disableRemoving } = useRemoveEventService();
  return (
    <SplitScreen leftWidth={1} rightWidth={1}>
      <EventsList
        type={EVENT_LIST_TYPE.ALL}
        actionfn={addUserEvent}
        useService={useGetAllEventsService}
        eventListRef={eventListRef}
        disableAction={disableAdding}
      />
      <EventsList
        type={EVENT_LIST_TYPE.SELECTED}
        actionfn={removeUserEvent}
        useService={useGetUserEventsQuery}
        disableAction={disableRemoving}
      />
    </SplitScreen>
  );
};

export default Dashboard;
