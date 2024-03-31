const login = {
  query: (body) => ({
    url: "/auth",
    method: "POST",
    body,
  }),
};

export default login;
