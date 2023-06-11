import React from 'react';
import { Stack } from '@mui/material';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Stack spacing={2}>
      <Hero/>
      <Contact/>
    </Stack>
    
  );
}

export default App;
