import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { AiFillLinkedin, AiOutlineLinkedin } from "react-icons/ai";
import BUTTON_CONFIG from "./ButtonConfig";

function LinkedinButton() {
  const [hover, setHover] = useState(false);

  return (
    <a href="https://www.linkedin.com/in/mauricio-mds/">
      <IconButton
        color={BUTTON_CONFIG.color}
        size={BUTTON_CONFIG.size}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label="Linkedin"
      >
        {hover ? <AiFillLinkedin /> : <AiOutlineLinkedin />}
      </IconButton>
    </a>
  );
}

export default LinkedinButton;
