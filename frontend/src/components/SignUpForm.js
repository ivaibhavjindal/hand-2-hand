import React from "react";
import {
  Button,
  TextField,
  Link,
  Grid,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

function SignUpForm(props) {
  const {
    firstName,
    handleFirstNameChange,
    lastName,
    handleLastNameChange,
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    state,
    handleStateChange,
    city,
    handleCityChange,
    handleSubmit,
    selectCity,
    selectState,
    ...classes
  } = props;
  return (
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
  );
}

export default SignUpForm;
