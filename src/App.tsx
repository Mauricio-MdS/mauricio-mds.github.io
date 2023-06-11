import React from "react";
import { Stack } from "@mui/material";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <CssBaseline>
      <Stack spacing={2}>
        <Hero />
        <Portfolio />
        <Contact />
      </Stack>
    </CssBaseline>
  );
}

export default App;
