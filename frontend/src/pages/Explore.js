import React, { Fragment } from "react";
import { Typography, Box, Container, withStyles } from "@material-ui/core";
import { Trans, useTranslation } from "react-i18next";
import { styles } from "../styles/Landing";
import ExploreCard from "../components/ExploreCard";

function Explore(props) {
  const { t } = useTranslation();
  const { classes } = props;
  return (
    <Fragment>
      <Box pt={3} pb={2} className={classes.textCenter}>
        <Container maxWidth="sm">
          <Typography className={classes.heading} component="h1">
            <Trans i18nKey={"landing.headings.gettingStarted"}>
              Getting Started.
            </Trans>
          </Typography>
          <Typography color="textSecondary" variant="body2" component="h6">
            <Trans i18nKey={"landing.subHeadings.threeEasySteps"}>
              Three easy steps to get Going?
            </Trans>
          </Typography>
        </Container>
        <Container maxWidth="md">
          <ExploreCard />
        </Container>
      </Box>
    </Fragment>
  );
}

export default withStyles(styles)(Explore);
