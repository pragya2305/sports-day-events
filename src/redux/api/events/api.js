import baseApi from "../baseApi";
import createEndpoint from "../createEndpoint";
import {
  getUserEvents,
  addUserEvent,
  getAllEvents,
  removeUserEvent,
} from "./endpoints";

export const api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserEvents: builder.query(createEndpoint(getUserEvents)),
    getAllEvents: builder.query(createEndpoint(getAllEvents)),
    addUserEvent: builder.mutation(createEndpoint(addUserEvent)),
    removeUserEvent: builder.mutation(createEndpoint(removeUserEvent)),
  }),
});

export const {
  useGetUserEventsQuery,
  useGetAllEventsQuery,
  useAddUserEventMutation,
  useRemoveUserEventMutation,
} = api;
