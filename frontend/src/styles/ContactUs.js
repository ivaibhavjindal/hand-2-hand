export const styles = (theme) => ({
  textUpper: {
    textTransform: "uppercase",
  },
  textCenter: {
    textAlign: "center",
  },
  heading: {
    fontWeight: "800",
    [theme.breakpoints.up("xs")]: {
      fontSize: theme.typography.h3.fontSize,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h2.fontSize,
    },
  },
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});
