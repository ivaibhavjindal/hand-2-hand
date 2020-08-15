import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/Header";
import { useToggle } from "../hooks/useToggle";

const tabs = [
  { label: "Home", to: "/" },
  { label: "Explore", to: "/explore" },
  { label: "Contact Us", to: "/contactus" },
  { label: "Sign In", to: "/users/signin" },
  { label: "Sign Up", to: "/users/signup" },
];

const HeaderLinks = (props) => {
  const {
    mobile,
    laptopNavLinks,
    mobileNavLinks,
    isMobileNavOpen,
    displayBlock,
    displayNone,
  } = props;
  const [value, setValue] = React.useState("Home");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      variant="scrollable"
      value={value}
      onChange={handleChange}
      className={`${mobile ? mobileNavLinks : laptopNavLinks} ${
        isMobileNavOpen ? displayBlock : displayNone
      }`}
      aria-label="Header Links"
    >
      {tabs.map((tab, i) => (
        <Tab
          index={i}
          value={tab.label}
          key={tab.label}
          to={tab.to}
          label={tab.label}
          component={NavLink}
          id={tab.label}
          aria-controls={tab.label}
        />
      ))}
    </Tabs>
  );
};

function Header({ classes }) {
  const [isMobileNavOpen, toggleShowMobileNavLinks] = useToggle();
  return (
    <div>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="toggle Header Links"
            onClick={toggleShowMobileNavLinks}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/">Hand2Hand</NavLink>
          </Typography>
          <HeaderLinks {...classes} mobile={false} />
        </Toolbar>
        <HeaderLinks
          {...classes}
          mobile={true}
          isMobileNavOpen={isMobileNavOpen}
        />
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
