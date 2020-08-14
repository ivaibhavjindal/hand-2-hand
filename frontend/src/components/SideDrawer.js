import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

export default function SideDrawer(props) {
  const { drawerState, toggleDrawerState, ...classes } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerState,
          [classes.drawerClose]: !drawerState,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerState,
            [classes.drawerClose]: !drawerState,
          }),
        }}
      >
        <div className={classes.toolbar} />
        <List className={classes.sideDrawer}>
          <ListItem button onClick={toggleDrawerState}>
            <ListItemIcon aria-label="toggle drawer" color="inherit">
              {!drawerState ? (
                <ChevronRightIcon className={classes.whiteIcon} />
              ) : (
                <ChevronLeftIcon className={classes.whiteIcon} />
              )}
            </ListItemIcon>
            <ListItemText> Close </ListItemText>
          </ListItem>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} button>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon className={classes.whiteIcon} />
                ) : (
                  <MailIcon className={classes.whiteIcon} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
