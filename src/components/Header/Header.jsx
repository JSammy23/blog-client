import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { styled } from '@mui/system';

const HeaderContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
}));

const Header = ({ toggleTheme }) => {
  return (
    <HeaderContainer position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Button color="inherit">Link 1</Button>
          <Button color="inherit">Link 2</Button>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Wandering Wisdom
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'flex-end' }}>
          <Button color="inherit">Link 3</Button>
          <Button color="inherit">Link 4</Button>
          <Tooltip title="Toggle Theme">
            <IconButton color="inherit" onClick={toggleTheme}>
              <DarkModeOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </HeaderContainer>
  );
};

export default Header;
