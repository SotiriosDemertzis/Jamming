import TrackItem from "./TrackItem";
import { Typography,Box } from "@mui/material";

function Results({Tracks}) {
    return (
        <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', p: 3, borderRadius: 2, height: '100%' }}>
        <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>
          Results
        </Typography>
        {Tracks.map(track => (
          <TrackItem key={track.id} track={track} />
        ))}
      </Box>
    );
}

export default Results;