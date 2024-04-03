import baseApi from "../baseApi";
import createEndpoint from "../createEndpoint";
import { login, logout, user } from "./endpoints";

export const api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation(createEndpoint(login)),
    logout: builder.mutation(createEndpoint(logout)),
    getUserAuthStatus: builder.query(createEndpoint(user)),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetUserAuthStatusQuery,
} = api;
