import React from 'react';
import { Stack } from '@mui/material';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <Stack spacing={2}>
      <Hero/>
      <Portfolio/>
      <Contact/>
    </Stack>
    
  );
}

export default App;
