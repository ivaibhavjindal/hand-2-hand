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
            label={t('signUp.form.fname')}
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
            label={t('signUp.form.lname')}
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
            label={t('signUp.form.email')}
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
            label={t('signUp.form.pass')}
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="state">{`${t('signUp.form.state')} *`}</InputLabel>
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
            <InputLabel htmlFor="city">{`${t('signUp.form.city')} *`}</InputLabel>
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
        {t('signUp.form.submit')}
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link component={NavLink} to="/users/signin" variant="body2">
            {t('signUp.signIn')}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

export default SignUpForm;
