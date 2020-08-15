import React from "react";
import { Tooltip } from "@material-ui/core";

function ContactUsTechIcon({ icon }) {
  return (
    <Tooltip title={icon.name} aria-label={icon.name} arrow interactive>
      <span
        style={{
          fontSize: "4rem",
        }}
      >
        {icon.component}
      </span>
    </Tooltip>
  );
}

export default ContactUsTechIcon;
