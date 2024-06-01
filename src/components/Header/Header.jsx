// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
          My Blog
        </Typography>
        <Button color="inherit" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </Toolbar>
    </HeaderContainer>
  );
};

export default Header;
