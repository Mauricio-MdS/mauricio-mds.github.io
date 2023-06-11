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
import porfolioImg from './portfolio.png';

function Portfolio() {
  return (
    <Stack
      spacing={3}
      component="section"
      textAlign="center"
      alignItems="center"
      p="16px"
    >
      <Typography variant="h2" content="h2" gutterBottom>
        How I code
      </Typography>
      <Card component="article">
        <CardContent>
          <CardMedia sx={{ height: 140 }} image={porfolioImg} title="" />
          <Typography gutterBottom variant="h5" component="div">
            Personal site
          </Typography>
          <Stack direction='row' justifyContent='center' spacing={1} marginBottom='8px'>
            <Chip label="React" color="info" size="small" />
            <Chip label="Typescript" color="info" size="small" />
            <Chip label="Material UI" color="info" size="small" />
          </Stack>

          <Typography variant="body2" color="text.secondary">
            You can check this site source code.
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
