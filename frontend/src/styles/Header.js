export const styles = (theme) => ({
  root: {
    background: "rgba(0,0,0,.9)",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
  },
  displayNone: {
    display: "None",
  },
  displayBlock: {
    display: "block",
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      marginLeft: theme.spacing(5),
    },
    flexGrow: 1,
  },
  mobileNavLinks: {
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  laptopNavLinks: {
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
});
