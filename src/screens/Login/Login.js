import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLoginService } from "@redux/service";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { doLogin, loading, error } = useLoginService();

  const handleSubmit = (event) => {
    event.preventDefault();
    doLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {error && (
            <Typography
              variant='body2'
              gutterBottom
              bgcolor='red'
              align='center'
              color='white'
            >
              {error}
            </Typography>
          )}
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
            autoFocus
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            value={password}
            autoComplete='current-password'
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            disabled={!username || !password || loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
