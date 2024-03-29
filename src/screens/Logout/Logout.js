import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { URL } from "@enums";

const Logout = () => {
  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component='h1' variant='h5' mb={2}>
          You Have been logged out.
        </Typography>
        <Typography variant='h6'>
          Click Here to <Link to={URL.LOGIN}>Login</Link> again.
        </Typography>
      </Box>
    </Container>
  );
};

export default Logout;
