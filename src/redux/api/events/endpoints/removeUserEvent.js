const removeUserEvent = {
  query: ({ id }) => ({
    url: `/user-events/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: ["Events"],
};

export default removeUserEvent;
