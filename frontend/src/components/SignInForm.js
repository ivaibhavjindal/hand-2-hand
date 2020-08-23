import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";

function SignInForm(props) {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    showPassword,
    toggleShowPassword,
    ...classes
  } = props;
  return (
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
  );
}

export default SignInForm;
