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
import { AlignVerticalCenter } from "@mui/icons-material";

function PortfolioCard({
  description,
  image,
  liveLink,
  sourceLink,
  technologies,
  title,
}: PortfolioType) {
  return (
    <Card
      component="article"
      sx={{
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ height: 140, backgroundSize: "cover" }}
        image={image}
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3" align="center">
          {title}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          marginBottom="8px"
          flexWrap="wrap"
          rowGap={0.5}
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
