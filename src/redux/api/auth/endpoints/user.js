const login = {
  query: ({ userId }) => ({
    url: `/auth/${userId}`,
    method: "GET",
  }),
  providesTags: ["AuthStatus"],
};

export default login;
