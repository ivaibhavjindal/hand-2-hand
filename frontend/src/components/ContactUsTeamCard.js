import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function ContactUsTeamCard({ member }) {
  return (
    <Card style={{ paddingTop: ".5rem" }}>
      <CardActionArea style={{ textAlign: "center" }}>
        <CardMedia title={member.name}>
          <img
            alt={member.name}
            src={member.img}
            height="200px"
            width="200px"
            style={{ borderRadius: "50%" }}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h4" component="h2">
            {member.name}
          </Typography>
          <Typography gutterBottom variant="body2" component="h6">
            {member.position}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {member.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <IconButton
          href={`https://linkedin.com/in/${member.linkedin}`}
          color="primary"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href={`https://github.com/${member.github}`}
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ContactUsTeamCard;
