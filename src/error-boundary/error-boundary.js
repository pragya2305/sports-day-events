import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant='h4' component='h4'>
            Something went wrong.
          </Typography>
          <Typography variant='h5' component='h5'>
            Please try again.
          </Typography>
        </Box>
      );
    }

    return this.props.children;
  }
}
