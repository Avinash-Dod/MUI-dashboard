
import { KeyboardArrowDown } from "@mui/icons-material";
import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";
import { NavLink } from "react-router-dom";
const settings = ['Your Profile', 'Logout'];
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

      <Tooltip title="Open Profile settings" >
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} edge="end">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />

          <Typography variant="body1" component="span" sx={{ margin: "0px 10px 0px 10px ", float: "right", textAlign: "left", color: "#ffffff" }}>
            Admin Name
            <br></br>
            admin@gmail.com
          </Typography>


          <KeyboardArrowDown color="white" />

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
       
          <MenuItem  onClick={handleCloseUserMenu}>
            <NavLink to="/profile" style={{ textDecoration: "none",color:"#212529" }}><Typography textAlign="center" >Your Profile</Typography></NavLink>
            
          </MenuItem>
          <MenuItem  onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Logout</Typography>
            
          </MenuItem>
      </Menu>
    </Box>
  )

}
export default UserProfile