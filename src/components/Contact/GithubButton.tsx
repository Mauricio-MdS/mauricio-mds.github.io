import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { VscGithubInverted, VscGithub } from "react-icons/vsc";
import BUTTON_CONFIG from "./ButtonConfig";

function GithubButton() {
  const [hover, setHover] = useState(false);

  return (
    <a href="https://github.com/mauricio-mds">
      <IconButton
        color={BUTTON_CONFIG.color}
        size={BUTTON_CONFIG.size}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label="Github"
      >
        {hover ? <VscGithubInverted /> : <VscGithub />}
      </IconButton>
    </a>
  );
}

export default GithubButton;
