export const styles = (theme) => ({
  root: {
    flexShrink: 0,
    zIndex: theme.zIndex.drawer + 1,
  },
  icon: {
    paddingTop: ".6rem",
    color: "red",
  },
  localeButton: {
    [theme.breakpoints.down("md")]: {
      fontSize: "8px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3px",
    },
  },
  footer: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: theme.spacing(1),
    marginTop: "auto",
    background: "#000",
    color: "#fff",
  },
});
