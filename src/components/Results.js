import React from 'react';
import { Typography, Box, List } from "@mui/material";
import TrackItem from './TrackItem';

function Results({ tracks = [], onAddTrack }) {
  return (
    <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', p: 3, borderRadius: 2, height: '100%', overflowY: 'auto' }}>
      <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>
        Search Results
      </Typography>
      {tracks.length > 0 ? (
        <List>
          {tracks.map(track => (
            <TrackItem key={track.id} track={track} onAddTrack={onAddTrack} />
          ))}
        </List>
      ) : (
        <Typography sx={{ color: 'white' }}>
          No tracks found. Try searching for a song!
        </Typography>
      )}
    </Box>
  );
}

export default Results;