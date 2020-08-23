import React from "react";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";

export const timelineItems = [
  {
    date: "Aug 2019",
    icon: <EmojiObjectsIcon />,
    heading: "HackerStack Hackathon",
    text: `The idea was proposed by Atul during the first Hackathon we attended, though we didn't win it, The idea stayed with us`,
  },
  {
    date: "July 2020",
    icon: <TelegramIcon />,
    heading: "Full Stack Project",
    text:
      "We were discussing about ideas to make up a full stack project and this one idea stood out.",
  },
  {
    date: "July 2020",
    icon: <GitHubIcon />,
    heading: "Hand-2-Hand Repository",
    text:
      "We started up with the project, set up a github repository and started coding.",
  },
  {
    date: "Aug 2020",
    icon: <CodeIcon />,
    heading: "Eat Sleep Code Repeat",
    text:
      "We had good time off College so were coding throughout to finish it as soon as possible.",
  },
];
