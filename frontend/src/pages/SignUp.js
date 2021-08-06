import React from "react";
import { Trans }  from "react-i18next";
import {
  Avatar,
  CssBaseline,
  Typography,
  Paper,
  withStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { styles } from "../styles/SignUp";
import { useFormInput } from "../hooks/useFormInput";
import { states } from "../shared/states";
import { cities } from "../shared/cities";
import SignUpForm from "../components/SignUpForm";


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
        <option key={city} value={city}>
          {city}
        </option>
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
    console.log("City: ", city);
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
          <Trans i18nKey={"signUp.heading"}>Sign up</Trans>
        </Typography>
        <SignUpForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          state={state}
          city={city}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleStateChange={handleStateChange}
          handleCityChange={handleCityChange}
          handleSubmit={handleSubmit}
          selectCity={selectCity}
          selectState={selectState}
          {...classes}
        />
      </Paper>
    </main>
  );
}

export default withStyles(styles)(SignUp);
