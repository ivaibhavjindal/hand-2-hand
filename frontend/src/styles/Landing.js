export const styles = (theme) => ({
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
  extraLargeButtonLabel: {
    fontSize: theme.typography.caption.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(0, 1),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
  navigationTop: {
    fontWeight: "bold",
    marginBottom: "5rem",
    marginRight: ".75rem",
    position: "fixed",
    bottom: "0",
    right: "0",
    zIndex: "600",
  },
  transition: {
    animation: `$fadein 1s`,
  },
  "@keyframes fadein": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
});
