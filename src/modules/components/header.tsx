import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Menu, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Notifications, Settings, ExitToApp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Logo = styled('img')({
  height: 40,
  marginRight: 16,
});

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [language, setLanguage] = React.useState('en');

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Logo src="/hotel-logo.png" alt="Hotel Logo" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hotel Admin
        </Typography>
        <Select
          value={language}
          onChange={handleLanguageChange}
          sx={{ marginRight: 2, color: 'white' }}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="es">ES</MenuItem>
        </Select>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton color="inherit" onClick={handleMenu}>
          <Settings />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>
        <IconButton color="inherit">
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

