import React from "react";
import { Icon } from "@iconify/react";
import materialUi from "@iconify/icons-logos/material-ui";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import reactIcon from "@iconify/icons-logos/react";
import mongodbIcon from "@iconify/icons-logos/mongodb";
import apollostackIcon from "@iconify/icons-logos/apollostack";
import graphqlIcon from "@iconify/icons-logos/graphql";
import gitIcon from "@iconify/icons-logos/git-icon";
import githubIcon from "@iconify/icons-logos/github-icon";
import expressIcon from "@iconify/icons-logos/express";

export const teamMembers = [
  {
    name: "Vaibhav Jindal",
    img:
      "https://image.freepik.com/free-vector/blue-gradient-starry-night-background_23-2148261848.jpg",
    position: "Front-End Developer",
    description:
      "Hi There! I designed the frontend of this site. I am a computer science undergrad, currently in my sophomore year. I share a keen interest in Web Development and Deep Learning. Reach out in case of any queries or just want to say Hi!",
    github: "ivaibhavjindal",
    linkedin: "ivaibhavjindal",
  },
  {
    name: "Atul Thakur",
    img:
      "https://image.freepik.com/free-vector/blue-gradient-starry-night-background_23-2148261848.jpg",
    position: "Back-End Developer",
    description:
      "Hi There! I designed the frontend of this site. I am a computer science undergrad, currently in my sophomore year. I share a keen interest in Web Development and Deep Learning. Reach out in case of any queries or just want to say Hi!",
    github: "atul1837",
    linkedin: "ivaibhavjindal",
  },
];

export const techIcons = [
  {
    name: "ReactJs",
    component: <Icon icon={reactIcon} style={{ margin: "auto 1rem" }} />,
  },
  {
    name: "NodeJs",
    component: <Icon icon={nodejsIcon} style={{ margin: "auto 1rem" }} />,
  },
  {
    name: "Material-UI",
    component: <Icon icon={materialUi} style={{ margin: "auto 1rem" }} />,
  },
  {
    name: "Github",
    component: <Icon icon={githubIcon} style={{ margin: "auto 1rem" }} />,
  },
  {
    name: "GraphQl",
    component: <Icon icon={graphqlIcon} style={{ margin: "auto 1rem" }} />,
  },
  {
    name: "MongoDb",
    component: <Icon icon={mongodbIcon} style={{ margin: "auto 1rem" }} />,
  },
  {
    name: "ApolloClient",
    component: <Icon icon={apollostackIcon} style={{ margin: "auto 1rem" }} />,
  },
  {
    name: "Git",
    component: <Icon icon={gitIcon} style={{ margin: "auto 1rem" }} />,
  },
  {
    name: "ExpressJs",
    component: <Icon icon={expressIcon} style={{ margin: "auto 1rem" }} />,
  },
];
