import React from "react";
import { Trans } from "react-i18next";
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
import { useToggle } from "../hooks/useToggle";
import { states } from "../shared/states";
import { cities } from "../shared/cities";
import { genders } from "../shared/genders";
import { useMutation } from "@apollo/client";
import ADD_USER_DETAIL from "../graphql/mutations/AddUserDetail";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import axios from "../axios/axios";

function SignUp({ classes }) {
  const [showPassword, toggleShowPassword] = useToggle(false);
  const [showDetailForm, toggleShowDetailForm] = useToggle(false);
  const [firstName, handleFirstNameChange, resetFirstName] = useFormInput("");
  const [lastName, handleLastNameChange, resetLastName] = useFormInput("");
  const [userName, handleUserNameChange, resetUserName] = useFormInput("");
  const [email, handleEmailChange, resetEmail] = useFormInput("");
  const [password, handlePasswordChange, resetPassword] = useFormInput("");
  const [state, handleStateChange, resetState] = useFormInput("");
  const [city, handleCityChange, resetCity] = useFormInput("");
  const [address, handleAddressChange, resetAddress] = useFormInput("");
  const [phone, handlePhoneChange, resetPhone] = useFormInput("");
  const [gender, handleGenderChange, resetGender] = useFormInput("");

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

  const selectGender = () =>
    genders.map((gender) => <option key={gender}> {gender} </option>);

  const [
    addUserDetail,
    { data, loading: addUserDetailLoading, error: addUserDetailError },
  ] = useMutation(ADD_USER_DETAIL);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (showDetailForm) {
      // graphql req
      addUserDetail({
        variables: {
          firstName,
          lastName,
          userName,
          email,
          phone,
          city,
          state,
          address,
          gender,
        },
      });
      resetEmail();
    } else {
      console.log(email + password);
      axios
        .post("register", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data) toggleShowDetailForm();
        })
        .catch((err) => console.error(err));
    }

    // console.log("First Name:", firstName);
    // console.log("Last Name:", lastName);
    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("State: ", state);
    // console.log("City: ", city);
    resetFirstName();
    resetLastName();
    resetUserName();
    resetPassword();
    resetState();
    resetCity();
    resetAddress();
    resetPhone();
    resetGender();
  };

  if (addUserDetailLoading) return <h3>loading</h3>;
  if (addUserDetailError) return <h3>Error</h3>;
  console.log(data);

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
        {showDetailForm ? (
          <SignUpForm
            firstName={firstName}
            lastName={lastName}
            userName={userName}
            state={state}
            city={city}
            address={address}
            phone={phone}
            gender={gender}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            handleUserNameChange={handleUserNameChange}
            handleStateChange={handleStateChange}
            handleCityChange={handleCityChange}
            handleAddressChange={handleAddressChange}
            handlePhoneChange={handlePhoneChange}
            handleGenderChange={handleGenderChange}
            handleSubmit={handleSubmit}
            selectCity={selectCity}
            selectState={selectState}
            selectGender={selectGender}
            {...classes}
          />
        ) : (
          <SignInForm
            email={email}
            password={password}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            handleSubmit={handleSubmit}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            isSignUp={true}
            {...classes}
          />
        )}
      </Paper>
    </main>
  );
}

export default withStyles(styles)(SignUp);
