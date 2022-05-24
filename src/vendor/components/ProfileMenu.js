
import { KeyboardArrowDown } from "@mui/icons-material";
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ProfileMenu = () => {

    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const Setting = [
        {
            Name: "Profile",
            href: "/vendor/profile"
        },
        {
            Name: "Account Management",
            href: "/vendor/dashboard"
        },
        {
            Name: "Logout",
            href: "/vendor/dashboard"
        }
    ]
    
    return (
        <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Open Profile settings" >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} edge="end">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    <Typography variant="body1" component="span" sx={{ margin: "0px 10px 0px 10px ", float: "right", textAlign: "left", color: "#ffffff" }}>
                        Vendor Name
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
                {Setting.map((Item) => (
                    <NavLink to={Item.href} style={{ textDecoration: "none", color: "#212529" }}>
                    <MenuItem onClick={handleCloseUserMenu} key={Item.Name}>
                        <Typography textAlign="center" >{Item.Name}</Typography>

                    </MenuItem>
                    </NavLink>
                ))}


            </Menu>
        </Box>
    )

}
export default ProfileMenu