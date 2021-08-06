import React from "react";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import { Trans } from "react-i18next";

export const timelineItems = [
  {
    date: <Trans i18nKey={"landing.timeline.date1"}>Aug 2019</Trans>,
    icon: <EmojiObjectsIcon />,
    heading: <Trans i18nKey={"landing.timeline.head1"}>HackerStack Hackathon</Trans>,
    text: <Trans i18nKey={"landing.timeline.subHead1"}>The idea was proposed by Atul during the first Hackathon we attended, though we didn't win it, The idea stayed with us</Trans>,
  },
  {
    date: <Trans i18nKey={"landing.timeline.date2"}>July 2020</Trans>,
    icon: <TelegramIcon />,
    heading: <Trans i18nKey={"landing.timeline.head2"}>Full Stack Project</Trans>,
    text:
      <Trans i18nKey={"landing.timeline.subHead2"}>We were discussing about ideas to make up a full stack project and this one idea stood out.</Trans>,
  },
  {
    date: <Trans i18nKey={"landing.timeline.date3"}>July 2020</Trans>,
    icon: <GitHubIcon />,
    heading: <Trans i18nKey={"landing.timeline.head3"}>Hand-2-Hand Repository</Trans>,
    text:
      <Trans i18nKey={"landing.timeline.subHead3"}>We started up with the project, set up a github repository and started coding.</Trans>,
  },
  {
    date: <Trans i18nKey={"landing.timeline.date4"}>Aug 2020</Trans>,
    icon: <CodeIcon />,
    heading: <Trans i18nKey={"landing.timeline.head4"}>Eat Sleep Code Repeat</Trans>,
    text:
      <Trans i18nKey={"landing.timeline.subHead4"}>We had good time off College so were coding throughout to finish it as soon as possible.</Trans>,
  },
];
