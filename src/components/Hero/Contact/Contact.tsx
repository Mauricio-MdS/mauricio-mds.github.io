import React from "react";
import { Stack } from "@mui/material";
import { AiFillLinkedin, AiOutlineLinkedin } from "react-icons/ai";
import {
  VscGithubInverted,
  VscGithub,
  VscMailRead,
  VscMail,
} from "react-icons/vsc";
import ContactButton from "./ContactButton";

function Contact() {
  return (
    <Stack direction="row" spacing={1} justifyContent='flex-end'>
      <ContactButton
        link="https://www.linkedin.com/in/mauricio-mds/"
        label="Linkedin"
        HoverIcon={AiFillLinkedin}
        Icon={AiOutlineLinkedin}
      />
      <ContactButton
        link="https://github.com/mauricio-mds"
        label="Github"
        HoverIcon={VscGithubInverted}
        Icon={VscGithub}
      />
      <ContactButton
        link="mailto:mauricio.martins.gmail.com"
        label="Email"
        HoverIcon={VscMailRead}
        Icon={VscMail}
      />
    </Stack>
  );
}

export default Contact;
