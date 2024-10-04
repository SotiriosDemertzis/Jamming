import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery.trim()) {
            onSearch(searchQuery);
        }
    };

    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 2, 
            width: '400px',
            margin: 'auto',
            mb: 10
        }}>
            <TextField
                id="searchField"
                placeholder="Search for a song"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ 
                    bgcolor: 'white',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'transparent',
                        },
                        '&:hover fieldset': {
                            borderColor: 'transparent',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'transparent',
                        },
                    },
                }}
            />
            <Button 
                id="searchBtn"
                variant="contained" 
                fullWidth
                onClick={handleSearch}
                sx={{ 
                    bgcolor: "rgba(0, 0, 0, 0.9)", 
                    '&:hover': {
                        bgcolor: 'darknavy',
                    },
                }}
            >
                SEARCH
            </Button>
        </Box>
    );
}

export default SearchBar;