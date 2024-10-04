import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import {Container } from "@mui/material";

import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import Results from "./Results";
import Playlist from "./Playlist";

const sampleTracks = [
  { id: 1, name: "Candela", artist: "Buena Vista Social Club", album: "Buena Vista Social Club" },
  { id: 2, name: "Another Track", artist: "Some Artist", album: "Some Album" },
];

function App() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: 'url("https://images.unsplash.com/photo-1726987235424-0605453326bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Navbar />
        <SearchBar />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item size={{ xs: 6, md: 6 }}>
            <Results Tracks={sampleTracks}/>
          </Grid>
          <Grid size={{ xs: 6, md: 6 }}>
            <Playlist Tracks={[]}/>
          </Grid>
        </Grid>

      </Container>

    </Box>
  );
}

export default App;
