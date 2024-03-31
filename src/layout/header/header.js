import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useLogoutService } from "@redux/service";

const Header = () => {
  const { logoutUser, isLoading } = useLogoutService();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Sports Day Events
        </Typography>
        <Button color='inherit' onClick={logoutUser} disabled={isLoading}>
          {isLoading ? "Logging Out" : "Logout"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
