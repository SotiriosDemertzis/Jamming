import { AppBar, Toolbar, Typography} from '@mui/material';

function Navbar() {
    return (
      <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ 
          justifyContent: 'center', 
          alignItems: 'center',
          height: 64, 
          minHeight: 64,
          padding: 0,
          margin: 3
        }}>
          <Typography variant="h2" sx={{ color: 'white' }}>
            Welcome to Jamming
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };

  export default Navbar;