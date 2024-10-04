import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";

import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import Results from "./Results";
import Playlist from "./Playlist";
import searchTrack from "../utils/SpotifyAPI";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchTrack(query);
    if (results && results.tracks && results.tracks.items) {
      const formattedResults = results.tracks.items.map(item => ({
        id: item.data.id,
        name: item.data.name,
        artist: item.data.artists.items[0].profile.name,
        album: item.data.albumOfTrack.name,
        uri: item.data.uri
      }));

      console.log(formattedResults);

      // Filter out duplicate tracks based on their names
      const uniqueResults = formattedResults.filter((track, index, self) =>
        index === self.findIndex((t) => t.name.toLowerCase() === track.name.toLowerCase())
      );

      console.log(uniqueResults);
      setSearchResults(uniqueResults);
    } else {
      setSearchResults([]);
    }
  };

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.some(t => t.name.toLowerCase() === track.name.toLowerCase())) {
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
    }
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const playlistData = {
      name: playlistName,
      tracks: playlistTracks.map(track => track.uri)
    };
    console.log("Saving playlist:", playlistData);
    alert("Your "+playlistData.name+" playlist has been saved!");
  };

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
        <SearchBar onSearch={handleSearch} />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Results tracks={searchResults} onAddTrack={addTrackToPlaylist} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Playlist 
              name={playlistName}
              tracks={playlistTracks}
              onNameChange={updatePlaylistName}
              onSave={savePlaylist}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;