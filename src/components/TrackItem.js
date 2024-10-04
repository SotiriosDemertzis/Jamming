import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TrackItem = ({ track }) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }
    }}>
      <Box>
        <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold' }}>
          {track.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          {track.artist} | {track.album}
        </Typography>
      </Box>
      <IconButton sx={{ color: 'white' }}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default TrackItem;