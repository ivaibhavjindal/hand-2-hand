import React from "react";
import { Trans } from "react-i18next";
import {
  Box,
  Link,
  Typography,
  Container,
  CssBaseline,
  Grid,
  Paper,
  withStyles,
} from "@material-ui/core";
import { techIcons, teamMembers } from "../data/ContactUs";
import { useFormInput } from "../hooks/useFormInput";
import { styles } from "../styles/ContactUs";
import ContactUsForm from "../components/ContactUsForm";
import ContactUsTeamCard from "../components/ContactUsTeamCard";
import ContactUsTechIcon from "../components/ContactUsTechIcon";
import { useToggle } from "../hooks/useToggle";
import { useMutation } from "@apollo/client";
import ADD_MESSAGE from "../graphql/mutations/AddMessage";

function ContactUs({ classes }) {
  const [firstName, handleFirstNameChange, resetFirstName] = useFormInput("");
  const [lastName, handleLastNameChange, resetLastName] = useFormInput("");
  const [email, handleEmailChange, resetEmail] = useFormInput("");
  const [message, handleMessageChange, resetMessage] = useFormInput("");

  const [snackbarState, toggleSnackbarState] = useToggle(false);
  const [transition, setTransition] = React.useState(undefined);

  const [
    addMessage,
    { data, loading: addMessageLoading, error: addMessageError },
  ] = useMutation(ADD_MESSAGE);

  const handleSubmit = (Transition) => (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Message:", message);
    const variables = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };
    addMessage({ variables: variables });
    resetFirstName();
    resetLastName();
    resetEmail();
    resetMessage();
    setTransition(() => Transition);
    toggleSnackbarState();
  };

  if (addMessageLoading) return <h3>loading</h3>;
  if (addMessageError) return <h3>Error</h3>;
  console.log(data);

  return (
    <div>
      <CssBaseline />
      <Box pt={3} mb={2} className={classes.textCenter}>
        <Container maxWidth="xs">
          <Typography
            color="textPrimary"
            variant="caption"
            className={classes.textUpper}
          >
            <Trans i18nKey={"contactUs.subHeadings.gotQuestion"}>Got a Question ?</Trans>
          </Typography>
          <Typography className={classes.heading} component="h1">
            <Trans i18nKey={"contactUs.headings.contact"}>Contact Us.</Trans>
          </Typography>
          <Typography color="textSecondary" variant="body2" component="h6">
            <Trans i18nKey={"contactUs.subHeadings.haveQuestions"}>
              Have any questions? We’d love to hear from you.
            </Trans>
          </Typography>
        </Container>
      </Box>

      <main className={classes.main}>
        <Paper className={classes.paper}>
          <ContactUsForm
            {...classes}
            firstName={firstName}
            lastName={lastName}
            email={email}
            message={message}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            handleEmailChange={handleEmailChange}
            handleMessageChange={handleMessageChange}
            handleSubmit={handleSubmit}
            transition={transition}
            setTransition={setTransition}
            snackbarState={snackbarState}
            toggleSnackbarState={toggleSnackbarState}
          />
        </Paper>
      </main>
      <Box pt={3} pb={2} className={classes.textCenter}>
        <Container maxWidth="xs">
          <Typography className={classes.heading} component="h1">
            <Trans i18nKey={"contactUs.headings.team"}>Our Team.</Trans>
          </Typography>
          <Typography color="textSecondary" variant="body2" component="h6">
            <Trans i18nKey={"contactUs.subHeadings.reachOut"}>
              Feel free to reach out at mentioned Social profiles
            </Trans>
          </Typography>
        </Container>
      </Box>
      <Container maxWidth={"lg"} style={{ paddingBottom: "2rem" }}>
        <Grid container spacing={2}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} key={member.name}>
              <ContactUsTeamCard {...classes} member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.textCenter}>
          <Typography className={classes.heading} component="h1">
            <Trans i18nKey={"contactUs.headings.techUsed"}>Technologies Used.</Trans>
          </Typography>
          <Link href="https://github.com/ivaibhavjindal/hand-2-hand">
            <Typography color="primary" variant="h6">
              <Trans i18nKey={"contactUs.checkGithub"}>
                Check Github for complete Code
              </Trans>
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.textCenter}
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          {techIcons.map((icon) => (
            <ContactUsTechIcon key={icon.name} icon={icon} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(ContactUs);
