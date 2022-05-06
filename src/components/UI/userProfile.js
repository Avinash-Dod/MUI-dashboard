
import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const UserProfile = () => {

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>

      <Tooltip title="Open settings" >
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} edge="end">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />

        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )

}
export default UserProfile