const logout = {
  query: ({ id }) => ({
    url: `/auth/${id}`,
    method: "DELETE",
  }),
};

export default logout;
