import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { useTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/Footer";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Copyright({ icon, text }) {
  return (
    <Typography>
      {`${text} © `}
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
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const locales = {
    de: "de",
    en: "en",
    es: "es",
    fr: "fr",
    hi: "hi",
    it: "it",
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <ButtonGroup
            variant="contained"
            color="secondary"
            aria-label="Change Language"
          >
            {Object.keys(locales).map((k) => (
              <Button
                className={classes.localeButton}
                onClick={() => changeLanguage(locales[k])}
              >
                {t(`footer.locales.${locales[k]}`)}
              </Button>
            ))}
          </ButtonGroup>
          <Typography>
            {t("footer.madeWith")} <FavoriteIcon className={classes.icon} />
          </Typography>
          <Copyright {...classes} text={t("footer.copyright")} />
        </Container>
      </footer>
    </div>
  );
}

export default withStyles(styles)(Footer);
