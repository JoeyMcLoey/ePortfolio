import React from 'react';
import { Box, ButtonGroup, Button } from '@mui/material';

const Navbar = () => {
    return (
        <Box p={5} bgcolor='black'>
            <ButtonGroup variant="text">
                <Button style={{ color: 'white', fontSize: '20px' }}>Home</Button>
                <Button style={{ color: 'white', fontSize: '20px' }}>About</Button>
                <Button style={{ color: 'white', fontSize: '20px' }}>Projects</Button>
                <Button style={{ color: 'white', fontSize: '20px' }}>Contact</Button>
            </ButtonGroup>
        </Box>
    );
};

export default Navbar;