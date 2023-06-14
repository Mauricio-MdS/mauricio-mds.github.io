import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import githubImg from "./github.png";

function Portfolio() {
  return (
    <Stack
      spacing={3}
      component="section"
      textAlign="center"
      alignItems="center"
      p="16px"
    >
      <Typography variant="h3" component="h2" gutterBottom>
        Projects
      </Typography>
      <Card component="article">
        <CardContent>
          <CardMedia sx={{ height: 140 }} image={githubImg} title="" />
          <Typography gutterBottom variant="h5">
            Mauricio Projects
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={1}
            marginBottom="8px"
          >
            <Chip label="React" color="info" size="small" />
            <Chip label="Typescript" color="info" size="small" />
            <Chip label="Material UI" color="info" size="small" />
            <Chip label="Github" color="info" size="small" />
          </Stack>

          <Typography variant="body2" color="text.secondary">
            Check the source code of this page, which was developed using React
            and TypeScript. The design incorporates Material UI components.
            Deployed on GitHub Pages.
          </Typography>
        </CardContent>
        <CardActions>
          <a href="https://github.com/mauricio-mds">
            <Button size="small">Source Code</Button>
          </a>
        </CardActions>
      </Card>
    </Stack>
  );
}

export default Portfolio;
