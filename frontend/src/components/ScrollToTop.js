import React from "react";
import NavigationIcon from "@material-ui/icons/Navigation";
import { makeStyles, Fab } from "@material-ui/core";
import { animateScroll as scroll } from "react-scroll";
import { Trans } from "react-i18next";

const useStyles = makeStyles({
  root: {
    fontWeight: "bold",
    marginBottom: "7.5rem",
    marginRight: ".75rem",
    position: "fixed",
    bottom: "0",
    right: "0",
    zIndex: "600",
  },
});

function ScrollToTop() {
  const classes = useStyles();
  return (
    <Fab
      variant="extended"
      color="secondary"
      onClick={() => scroll.scrollToTop()}
      className={classes.root}
    >
      <NavigationIcon />
      <Trans i18nKey={"helpers.top"}>Top</Trans>
    </Fab>
  );
}

export default ScrollToTop;
