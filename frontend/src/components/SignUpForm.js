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
import { useTranslation } from "react-i18next";

function SignUpForm(props) {
  const {
    firstName,
    handleFirstNameChange,
    lastName,
    handleLastNameChange,
    userName,
    handleUserNameChange,
    state,
    handleStateChange,
    city,
    handleCityChange,
    address,
    handleAddressChange,
    phone,
    handlePhoneChange,
    gender,
    handleGenderChange,
    handleSubmit,
    selectCity,
    selectState,
    selectGender,
    ...classes
  } = props;

  const { t } = useTranslation();

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
            label={t("signUp.form.fname")}
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
            label={t("signUp.form.lname")}
            name="lastName"
            autoComplete="lname"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="uname"
            name="userName"
            variant="outlined"
            required
            fullWidth
            id="userName"
            label={t("signUp.form.uname")}
            value={userName}
            onChange={handleUserNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="state">{`${t(
              "signUp.form.state"
            )} *`}</InputLabel>
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
            <InputLabel htmlFor="city">{`${t(
              "signUp.form.city"
            )} *`}</InputLabel>
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
        <Grid item xs={12}>
          <TextField
            autoComplete="address"
            name="address"
            variant="outlined"
            required
            fullWidth
            id="address"
            label={t("signUp.form.address")}
            value={address}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="phone"
            name="phone"
            variant="outlined"
            required
            fullWidth
            id="phone"
            label={t("signUp.form.phone")}
            value={phone}
            onChange={handlePhoneChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="gender">{`${t(
              "signUp.form.gender"
            )} *`}</InputLabel>
            <Select
              native
              value={gender}
              onChange={handleGenderChange}
              label="Gender *"
              inputProps={{
                name: "Gender",
                id: "gender",
              }}
            >
              <option aria-label="None" value="" />
              {selectGender()}
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
        {t("signUp.form.submit")}
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link component={NavLink} to="/users/signin" variant="body2">
            {t("signUp.signIn")}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

export default SignUpForm;
