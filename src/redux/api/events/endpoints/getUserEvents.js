const getUserEvents = {
  query: (where) => {
    return {
      url: "/user-events",
      method: "GET",
    };
  },
  providesTags: ["Events"],
};

export default getUserEvents;
