const getUserEvents = {
  query: () => {
    return {
      url: "/user-events",
      method: "GET",
    };
  },
  providesTags: ["Events"],
};

export default getUserEvents;
