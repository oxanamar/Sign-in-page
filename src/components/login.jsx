import React from "react";
import {
  Avatar,
  FormControlLabel,
  Grid,
  Paper,
  Checkbox,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = { backgroundColor: "#006580" };

  const btnStyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account?
          <Link href="#">Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
