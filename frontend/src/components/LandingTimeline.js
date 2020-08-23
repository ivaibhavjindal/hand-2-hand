import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { timelineItems } from "../data/Landing";

const Item = ({ date, icon, heading, text, classes }) => (
  <TimelineItem>
    <TimelineOppositeContent>
      <Typography variant="body2" color="textSecondary">
        {date}
      </Typography>
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot color="secondary">{icon}</TimelineDot>
      <TimelineConnector className={classes.secondaryBackground} />
    </TimelineSeparator>
    <TimelineContent>
      <Paper elevation={3} className={classes.timelineItemPaper}>
        <Typography variant="h6" component="h2">
          {heading}
        </Typography>
        <Typography>{text}</Typography>
      </Paper>
    </TimelineContent>
  </TimelineItem>
);

function LandingTimeline({ ...classes }) {
  const TimelineItems = timelineItems.map((timelineItem, itemNumber) => (
    <Item {...timelineItem} classes={classes} key={itemNumber} />
  ));
  return <Timeline align="alternate">{TimelineItems}</Timeline>;
}

export default LandingTimeline;
