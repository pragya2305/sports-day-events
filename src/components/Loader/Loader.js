import { CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Stack alignItems='center' justifyContent='center' sx={{ height: "100%" }}>
      <CircularProgress />
    </Stack>
  );
};

export default Loader;
