import React from "react";
import { Stack } from "@mui/material";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <CssBaseline>
      <Stack spacing={2}>
        <Hero />
        <Portfolio />
      </Stack>
    </CssBaseline>
  );
}

export default App;
