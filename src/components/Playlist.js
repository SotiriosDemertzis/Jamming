import TrackItem from "./TrackItem";
import { Typography,Box } from "@mui/material";

function Playlist({Tracks}) {
    return (
        <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', p: 3, borderRadius: 2, height: '100%' }}>
        <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>
          Playlist
        </Typography>
        {Tracks.map(track => (
          <TrackItem key={track.id} track={track} />
        ))}
      </Box>
    );
}

export default Playlist;