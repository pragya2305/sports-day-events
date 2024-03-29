const createEndpoint = (otherParams) => {
  return {
    transformResponse: (response) => {
      // can be used to transform response
      return response;
    },
    transformErrorResponse: (error) => {
      // can be used to transform error response
      return error;
    },
    ...otherParams,
  };
};

export default createEndpoint;
