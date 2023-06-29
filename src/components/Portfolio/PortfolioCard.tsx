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
import { PortfolioType } from "./PortfolioType";

function PortfolioCard({
  description,
  image,
  liveLink,
  sourceLink,
  technologies,
  title,
}: PortfolioType) {
  return (
    <Card component="article" sx={{ maxWidth: 400 }}>
      <CardContent>
        <CardMedia sx={{ height: 140 }} image={image} title="" />
        <Typography gutterBottom variant="h5" component="h3" align="center">
          {title}
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          marginBottom="8px"
        >
          {technologies.map((tech) => (
            <Chip label={tech} color="info" size="small" />
          ))}
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {liveLink && (
          <a href={liveLink}>
            <Button size="small">Open Project</Button>
          </a>
        )}
        {sourceLink && (
          <a href={sourceLink}>
            <Button size="small">Source Code</Button>
          </a>
        )}
      </CardActions>
    </Card>
  );
}

export default PortfolioCard;
