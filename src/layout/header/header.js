import React, { useCallback } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthSlice } from "../../redux/slice";
import { AUTH_STATUS, URL } from "../../enums";

const Header = () => {
  const { setUserAuthStatus } = useAuthSlice();
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    setUserAuthStatus(AUTH_STATUS.UNAUTHORIZED);
    navigate(URL.LOGOUT);
  }, [navigate, setUserAuthStatus]);

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Sports Day Events
        </Typography>
        <Button color='inherit' onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
