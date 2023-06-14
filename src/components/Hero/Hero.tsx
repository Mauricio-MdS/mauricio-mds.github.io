import React from "react";
import { Avatar, Card, Grid, Stack, Typography } from "@mui/material";
import hero200 from "./assets/hero200.webp";
import hero300 from "./assets/hero300.webp";
import hero400 from "./assets/hero400.webp";
import hero500 from "./assets/hero500.webp";
import Contact from "./Contact/Contact";

function Hero() {
  return (
    <Stack
      bgcolor="primary.main"
      p="32px"
      alignItems="center"
      component="header"
    >
      <Card sx={{ maxWidth: 1200 }} component="article" raised>
        <Grid container alignItems="center" textAlign="center" spacing={2}>
          <Grid item xs={12} sm={5} md={3} component="figure">
            <Avatar
              alt=""
              variant="rounded"
              src={hero500}
              srcSet={`
              ${hero200} 200w, 
              ${hero300} 300w, 
              ${hero400} 400w, 
              ${hero500} 500w 
              `}
              sx={{ height: "auto", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={7} md={9} p={1}>
            <Typography variant="h2" component="h1" gutterBottom>
              Full Stack Developer
            </Typography>
            <Typography variant="h6" component="p" align="left" p={2}>
              Welcome! I'm Mauricio, a web developer specializing in building
              dynamic and user-friendly web applications. My skillset includes
              Javascript, Typescript, React, Node, and Java. Whether it's
              creating intuitive front-end interfaces or designing efficient
              back-end systems, I'm dedicated to bringing ideas to life through
              code. Explore my portfolio to see some of my recent projects and
              feel free to get in touch.
            </Typography>
            <Contact/>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
}

export default Hero;
