export const styles = (theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
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
    "& a": {
      color: "rgba(255, 255, 255, .98)",
      textDecoration: "none",
    },
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
