import heroImg from "./hero.jpeg";
import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";

function Hero() {
  return (
    <Stack
      spacing={3}
      component="header"
      bgcolor="primary.main"
      textAlign="center"
      alignItems="center"
      p="16px"
    >
      <Typography variant="h1" content="h1" gutterBottom>
        Full Stack Developer
      </Typography>
      <Typography variant="h4" content="body1" align="center">
        Hello, I am Mauricio and I build web applications
      </Typography>
      <Avatar src={heroImg} sx={{ height: "160px", width: "160px" }} />
    </Stack>
  );
}

export default Hero;
