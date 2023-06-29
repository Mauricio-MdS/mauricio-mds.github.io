import React from "react";
import { Stack, Typography } from "@mui/material";
import { projects } from "./projects";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <Stack spacing={3} component="section" alignItems="center" p="16px">
      <Typography variant="h3" component="h2" gutterBottom>
        Projects
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
        {projects.map((project) => (
          <PortfolioCard {...project} />
        ))}
      </Stack>
    </Stack>
  );
}

export default Portfolio;
