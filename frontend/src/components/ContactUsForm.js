import React from "react";
import {
  Button,
  TextField,
  Grid,
  Slide,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useTranslation } from "react-i18next";

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

export function DirectionSnackbar({
  transition,
  snackbarState,
  toggleSnackbarState,
}) {
  const { t } = useTranslation();
  return (
    <div>
      <Snackbar
        open={snackbarState}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        autoHideDuration={6000}
        onClose={toggleSnackbarState}
        TransitionComponent={transition}
        message={t("contactUs.form.success")}
        key={transition ? transition.name : ""}
        action={
          <IconButton
            aria-label="close"
            color="secondary"
            onClick={toggleSnackbarState}
          >
            <CloseIcon />
          </IconButton>
        }
      />
    </div>
  );
}

function ContactUsForm(props) {
  const {
    firstName,
    lastName,
    email,
    message,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handleMessageChange,
    handleSubmit,
    ...classes
  } = props;

  const { t } = useTranslation();

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit(TransitionRight)}
      noValidate
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label={t("contactUs.form.fname")}
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
            label={t("contactUs.form.lname")}
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
            label={t("contactUs.form.email")}
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
            id="message"
            label={t("contactUs.form.message")}
            name="message"
            autoComplete="message"
            multiline
            rows={4}
            rowsMax={7}
            value={message}
            onChange={handleMessageChange}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        {t("contactUs.form.submit")}
      </Button>
      <DirectionSnackbar {...props} />
    </form>
  );
}

export default ContactUsForm;
