import React, { useState } from "react";
import { IconButton } from "@mui/material";

type ButtonType = {
  link: string;
  label: string;
  HoverIcon: React.ElementType;
  Icon: React.ElementType;
};

function ContactButton({ link, label, HoverIcon, Icon }: ButtonType) {
  const [hover, setHover] = useState(false);

  return (
    <a href={link}>
      <IconButton
        color="primary"
        size="large"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label={label}
      >
        {hover ? <HoverIcon /> : <Icon />}
      </IconButton>
    </a>
  );
}

export default ContactButton;
