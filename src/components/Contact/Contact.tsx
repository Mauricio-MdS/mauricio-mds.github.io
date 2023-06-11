import React from "react";
import { Stack, Typography } from "@mui/material";
import LinkedinButton from "./LinkedinButton";
import GithubButton from "./GithubButton";
import MailButton from "./MailButton";

function Contact() {
  return (
    <Stack alignItems="center" spacing={3} content="section" textAlign="center">
      <Typography variant="h2" content="h2" gutterBottom>
        Contact me
      </Typography>
      <Stack direction="row" spacing={1}>
        <LinkedinButton/>
        <GithubButton/>
        <MailButton/>
      </Stack>
    </Stack>
  );
}

export default Contact;
