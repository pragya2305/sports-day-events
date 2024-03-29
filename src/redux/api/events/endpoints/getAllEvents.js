const getAllEvents = {
  query: ({ page, limit }) => ({
    url: "/all-events",
    method: "GET",
    params: { _page: page, _per_page: limit },
  }),
  // Only have one cache entry because the arg always maps to one string
  serializeQueryArgs: ({ endpointName }) => {
    return endpointName;
  },
  // Always merge incoming data to the cache entry
  merge: (currentCache, newItems) => {
    if (currentCache.data.length < newItems.items)
      currentCache.data.push(...newItems.data);
  },
  // Refetch when the page arg changes
  forceRefetch({ currentArg, previousArg, endpointState }) {
    return (
      endpointState?.data?.pages >= currentArg?.page &&
      currentArg !== previousArg
    );
  },
};

export default getAllEvents;
