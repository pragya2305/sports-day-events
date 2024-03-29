const withAsync = async (fn) => {
  try {
    if (typeof fn !== "function") {
      throw new Error("The arg. must be a function.");
    }
    const data = await fn().unwrap();
    return {
      response: data,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      error,
      response: null,
    };
  }
};

export default withAsync;
