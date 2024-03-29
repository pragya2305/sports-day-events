import { Stack, Typography } from "@mui/material";
import React from "react";

const TechnicalError = ({ error = "Technical Error" }) => {
  return (
    <Stack alignItems='center' justifyContent='center'>
      <Typography variant='h6' component='h6' align='center'>
        {error}
      </Typography>
    </Stack>
  );
};

export default TechnicalError;
