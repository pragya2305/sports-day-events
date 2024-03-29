const addUserEvent = {
  query: (body) => ({
    url: "/user-events",
    method: "POST",
    body,
  }),
  invalidatesTags: ["Events"],
};

export default addUserEvent;
