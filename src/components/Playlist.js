import React, { useState, useEffect } from 'react';
import { Typography, Box, List, ListItem, ListItemText, TextField, Button } from "@mui/material";

function Playlist({ name, tracks, onNameChange, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  useEffect(() => {
    setEditedName(name);
  }, [name]);

  const handleNameClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleNameSubmit = () => {
    onNameChange(editedName);
    setIsEditing(false);
  };

  return (
    <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', p: 3, borderRadius: 2, height: '100%', overflowY: 'auto' }}>
      {isEditing ? (
        <TextField
          value={editedName}
          onChange={handleNameChange}
          onBlur={handleNameSubmit}
          onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
          autoFocus
          fullWidth
          sx={{ mb: 2, input: { color: 'white' } }}
        />
      ) : (
        <Typography variant="h4" sx={{ color: 'white', mb: 2, cursor: 'pointer' }} onClick={handleNameClick}>
          {name}
        </Typography>
      )}
      
      <List>
        {tracks.map(track => (
          <ListItem key={track.id} sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <ListItemText
              primary={<Typography sx={{ color: 'white' }}>{track.name}</Typography>}
              secondary={
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {track.artist} | {track.album}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      
      {tracks.length > 0 && (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={onSave}
          sx={{ mt: 2 }}
        >
          Save Playlist
        </Button>
      )}
    </Box>
  );
}

export default Playlist;