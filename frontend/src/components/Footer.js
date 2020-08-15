import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/Footer";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Copyright({ icon }) {
  return (
    <Typography>
      {`Copyright © `}
      <Link
        className={icon}
        href="https://github.com/ivaibhavjindal/hand-2-hand/"
      >
        Hand2Hand
      </Link>
      {` ${new Date().getFullYear()}.`}
    </Typography>
  );
}

function Footer({ classes }) {
  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography>
            Made with <FavoriteIcon className={classes.icon} />
          </Typography>
          <Copyright {...classes} />
        </Container>
      </footer>
    </div>
  );
}

export default withStyles(styles)(Footer);
