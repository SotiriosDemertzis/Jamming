import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const TrackItem = ({ track, onAddTrack }) => {
  return (
    <ListItem sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <ListItemText 
        primary={<Typography sx={{ color: 'white' }}>{track.name}</Typography>}
        secondary={
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            {track.artist} | {track.album}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <IconButton 
          edge="end" 
          aria-label="add" 
          sx={{ color: 'white' }}
          onClick={() => onAddTrack(track)}
        >
          <AddIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TrackItem;