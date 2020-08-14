import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  withStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { NavLink } from "react-router-dom";
import { styles } from "../styles/SignUp";
import { useFormInput } from "../hooks/useFormInput";
import { states } from "../shared/states";
import { cities } from "../shared/cities";

function SignUp({ classes }) {
  const [firstName, handleFirstNameChange, resetFirstName] = useFormInput("");
  const [lastName, handleLastNameChange, resetLastName] = useFormInput("");
  const [email, handleEmailChange, resetEmail] = useFormInput("");
  const [password, handlePasswordChange, resetPassword] = useFormInput("");
  const [state, handleStateChange, resetState] = useFormInput("");
  const [city, handleCityChange, resetCity] = useFormInput("");

  const selectState = () =>
    states.map((state) => <option key={state}> {state} </option>);

  const selectCity = (state) => {
    const selectedState = Object.keys(cities).filter(
      (city) => city.toLowerCase() === state.toLowerCase()
    );
    if (state !== "") {
      console.log(selectedState);
      return Object.keys(cities[selectedState]).map((city) => (
        <option value={city}> {city} </option>
      ));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("State: ", state);
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
    resetState();
    resetCity();
  };
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="state">State *</InputLabel>
                <Select
                  native
                  value={state}
                  onChange={handleStateChange}
                  label="State *"
                  inputProps={{
                    name: "State",
                    id: "state",
                  }}
                >
                  <option aria-label="None" value="" />
                  {selectState()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="city">City *</InputLabel>
                <Select
                  native
                  value={city}
                  onChange={handleCityChange}
                  label="City *"
                  inputProps={{
                    name: "City",
                    id: "city",
                  }}
                >
                  <option aria-label="None" value="" />
                  {selectCity(state)}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={NavLink} to="/users/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(SignUp);
