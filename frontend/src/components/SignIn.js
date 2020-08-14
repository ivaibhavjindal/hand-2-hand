import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/SignIn";
import { useFormInput } from "../hooks/useFormInput";
import { useToggle } from "../hooks/useToggle";

function SignIn({ classes }) {
  const [showPassword, toggleShowPassword] = useToggle(false);

  const [email, handleEmailChange, resetEmail] = useFormInput("");
  const [password, handlePasswordChange, resetPassword] = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    resetEmail();
    resetPassword();
  };

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <CssBaseline />
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="password">Password *</InputLabel>
            <OutlinedInput
              name="password"
              id="password"
              required
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              labelWidth={100}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={NavLink} to="/users/signup" variant="body2">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(SignIn);
