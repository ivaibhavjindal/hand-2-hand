import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/SignIn";
import { useFormInput } from "../hooks/useFormInput";
import { useToggle } from "../hooks/useToggle";
import SignInForm from "../components/SignInForm";

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
        <SignInForm
          email={email}
          password={password}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleSubmit={handleSubmit}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
          {...classes}
        />
      </Paper>
    </main>
  );
}

export default withStyles(styles)(SignIn);
