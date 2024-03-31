import baseApi from "../baseApi";
import createEndpoint from "../createEndpoint";
import { login, logout } from "./endpoints";

export const api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation(createEndpoint(login)),
    logout: builder.mutation(createEndpoint(logout)),
  }),
});

export const { useLoginMutation, useLogoutMutation } = api;
