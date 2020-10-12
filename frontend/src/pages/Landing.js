import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  Fab,
  Container,
} from "@material-ui/core";
import LandingCarousel from "../components/LandingCarousel";
import LandingTimeline from "../components/LandingTimeline";
import NavigationIcon from "@material-ui/icons/Navigation";
import WaveBorder from "../components/WaveBorder";
import { NavLink } from "react-router-dom";
import { styles } from "../styles/Landing";
import { Trans } from "react-i18next";

function Landing(props) {
  const sentences = {
    0: "Travelling Outstation and want to Earn while Travelling ?",
    1: "Looking for Urgent, Time Definite Deliveries at a Lower Cost ?",
  };
  const [sentence, setSentence] = useState(sentences[0]);
  useEffect(() => {
    const sentences = [
      "Travelling Outstation and want to Earn while Travelling ?",
      "Want Urgent, Time Definite Deliveries at a Lower Cost   ?",
    ];
    const interval = setInterval(() => {
      // console.log(sentence);
      setSentence((sentence) =>
        sentence === sentences[0] ? sentences[1] : sentences[0]
      );
    }, 2000);
    return () => clearInterval(interval);
  });
  const { classes, theme } = props;
  return (
    <Fragment>
      <Box
        display="flex"
        id="top"
        justifyContent="center"
        className={classes.wrapper}
      >
        <Card className={classes.card} data-aos-delay="200" data-aos="zoom-in">
          <Box justifyContent="space-between">
            <Grid container spacing={1}>
              <Grid item xs={12} md={5} style={{ textAlign: "center" }}>
                <Box mb={1}>
                  <Typography component="h1" className={classes.heading}>
                    HAND 2 HAND
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography
                    className={classes.transition}
                    variant={"body1"}
                    color="textSecondary"
                  >
                    {sentence}
                  </Typography>
                </Box>
                <NavLink to="/users/signup" style={{ textDecoration: "none" }}>
                  <Button
                    style={{ marginTop: "auto" }}
                    variant="contained"
                    color="secondary"
                    fullWidth
                    className={classes.extraLargeButton}
                    classes={{ label: classes.extraLargeButtonLabel }}
                  >
                    SIGNUP FOR FREE NOW!
                  </Button>
                </NavLink>
              </Grid>
              <Hidden smDown>
                <Grid item xs={12} md={6} style={{ marginLeft: "auto" }}>
                  <img
                    src={`https://image.freepik.com/free-vector/blue-gradient-starry-night-background_23-2148261848.jpg`}
                    className={classes.image}
                    alt="header example"
                  />
                </Grid>
              </Hidden>
            </Grid>
          </Box>
        </Card>
      </Box>
      <Fab
        variant="extended"
        color="secondary"
        href="#top"
        className={classes.navigationTop}
      >
        <NavigationIcon />
        Top
      </Fab>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
      <Box pt={3} pb={2} className={classes.textCenter}>
        <Container maxWidth="sm">
          <Typography className={classes.heading} component="h1">
            <Trans i18nKey={"landing.headings.gettingStarted"} >
              Getting Started.
            </Trans>
          </Typography>
          <Typography color="textSecondary" variant="body2" component="h6">
            Three easy steps to get Going?
          </Typography>
        </Container>
        <Container maxWidth="md">
          <LandingCarousel />
        </Container>
      </Box>
      <Box pt={3} pb={2} className={classes.textCenter}>
        <Container maxWidth="xs">
          <Typography className={classes.heading} component="h1">
            <Trans i18nKey={"landing.headings.ourStory"} >  
              Our Story.
            </Trans>
          </Typography>
          <Typography color="textSecondary" variant="body2" component="h6">
            Get to know how it all started?
          </Typography>
        </Container>
        <Container maxWidth="md">
          <LandingTimeline {...classes} />
        </Container>
      </Box>
    </Fragment>
  );
}

Landing.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(Landing);
