import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { styled } from '@mui/system';

const HeaderContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const Header = ({ toggleTheme }) => {
  return (
    <HeaderContainer position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Wandering Wisdom
        </Typography>
        <Tooltip  title="Toggle Theme" >
          <IconButton color="inherit" onClick={toggleTheme} >
            <DarkModeOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </HeaderContainer>
  );
};

export default Header;
