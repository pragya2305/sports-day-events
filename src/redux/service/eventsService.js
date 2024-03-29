import {
  useGetAllEventsQuery,
  useGetUserEventsQuery,
  useAddUserEventMutation,
  useRemoveUserEventMutation,
} from "../api/events/api";
import { timeConflict, infinityScroll } from "@helpers";
import { useEventsSlice } from "@redux/slice";
import { MODAL_TYPE, TOAST_TYPE } from "@enums";
import { EVENTS_LIMIT } from "@constants";
import { PAGE_LIMIT } from "@constants";

export const useGetAllEventsService = () => {
  const { allEventsPageNo } = useEventsSlice();
  const { data: userEvents } = useGetUserEventsQuery("");
  const {
    data: allEvents,
    isError,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetAllEventsQuery({ page: allEventsPageNo, limit: PAGE_LIMIT });
  const userEventsId = userEvents?.map(({ id }) => id);
  const data = allEvents?.data?.filter(({ id }) => !userEventsId.includes(id));
  return { data, isError, isLoading, isSuccess, isFetching };
};

export const useAddEventService = () => {
  const { setModal, setToast } = useEventsSlice();
  const { data: selectedEvents } = useGetUserEventsQuery("");
  const [addEvent, { isLoading: disableAdding }] = useAddUserEventMutation();

  const eventConflict = (event) =>
    selectedEvents.some(({ start_time, end_time }) =>
      timeConflict([start_time, end_time], [event.start_time, event.end_time])
    );

  const addUserEvent = async (event) => {
    if (selectedEvents?.length === EVENTS_LIMIT) {
      setModal(MODAL_TYPE.MAX_LIMIT);
    } else if (eventConflict(event)) {
      setModal(MODAL_TYPE.CONFLICT);
    } else {
      try {
        await addEvent(event).unwrap();
      } catch (error) {
        setToast({
          msg: "Error while adding the event",
          type: TOAST_TYPE.ERROR,
        });
      }
    }
  };

  return { addUserEvent, disableAdding };
};

export const useLoadMore = () => {
  const { increasePageNo } = useEventsSlice();
  const { isFetching } = useGetAllEventsService();
  return infinityScroll(increasePageNo, isFetching);
};

export const useRemoveEventService = () => {
  const { setToast } = useEventsSlice();
  const [removeEvent, { isLoading: disableRemoving }] =
    useRemoveUserEventMutation();

  const removeUserEvent = async (event) => {
    try {
      await removeEvent(event).unwrap();
    } catch (error) {
      setToast({
        msg: "Error while removing the event",
        type: TOAST_TYPE.ERROR,
      });
    }
  };

  return { removeUserEvent, disableRemoving };
};
