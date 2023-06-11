import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { VscMailRead, VscMail } from "react-icons/vsc";

import BUTTON_CONFIG from "./ButtonConfig";

function LinkedinButton() {
  const [hover, setHover] = useState(false);

  return (
    <a href="mailto:mauricio.martins.gmail.com">
      <IconButton
        color={BUTTON_CONFIG.color}
        size={BUTTON_CONFIG.size}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label="Mail"
      >
        {hover ? <VscMailRead /> : <VscMail />}
      </IconButton>
    </a>
  );
}

export default LinkedinButton;
