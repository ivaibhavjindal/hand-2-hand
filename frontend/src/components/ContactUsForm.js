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

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

export function DirectionSnackbar({
  transition,
  snackbarState,
  toggleSnackbarState,
}) {
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
        message="Message Succesfully Sent!"
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
  console.log(props);
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
            id="message"
            label="Message"
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
        Send Message
      </Button>
      <DirectionSnackbar {...props} />
    </form>
  );
}

export default ContactUsForm;
