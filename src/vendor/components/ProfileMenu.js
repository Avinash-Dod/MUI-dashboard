
import { KeyboardArrowDown } from "@mui/icons-material";
import { Avatar, Box, IconButton, Menu, Tooltip, Typography } from "@mui/material"
import { useState } from "react";
import { SettingMenu } from "../../components/UI/UI";
import VendorProfile from "../pages/VendorProfile";
import ChangePin from "./modals/action modals/ChangePin";
import DeleteAccount from "./modals/action modals/DeleteAccount";
import Logoutuser from "./modals/action modals/Logout";

const ProfileMenu = () => {

    const [anchorElUser, setAnchorElUser] = useState(null);
    const [profile, setProfile] = useState(false)
    const [deleteAccount, setDelete] = useState(false)
    const [pin, setPin] = useState(false)
    const [document, setDocument] = useState(false)
    const [logout, setLogout] = useState(false)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleProfile = () => {
        setProfile(true)
    }
    const handleDelete = () => {
        setDelete(true)
    }
    const handlePin = () => {
        setPin(true)
    }
    const handleDocument = () => {
        setDocument(true)
    }
    const handleLogout = () => {
        setLogout(true)
    }

    return (
        <Box sx={{ flexGrow: 0 }} >

            <Tooltip title="Open Profile settings" >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} edge="end">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    <Typography variant="body2" component="span" sx={{ margin: "0px 10px 0px 10px ", float: "right", textAlign: "left", color: "#ffffff" }}>
                        Vendor Name
                        <br></br>
                        +91 9876543210
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

                <SettingMenu onClick={handleProfile} sx={{ bgcolor: "#30AADD", color: "#fff" }}>
                    <Typography textAlign="center" >Profile</Typography>

                </SettingMenu>
                <SettingMenu onClick={handleDelete} sx={{ bgcolor: "#30AADD", color: "#fff" }}>
                    <Typography textAlign="center" >Delete Account</Typography>

                </SettingMenu>
                <SettingMenu onClick={handlePin} sx={{ bgcolor: "#30AADD", color: "#fff" }}>
                    <Typography textAlign="center" >Change Pin</Typography>

                </SettingMenu>
                <SettingMenu onClick={handleDocument} sx={{ bgcolor: "#30AADD", color: "#fff" }}>
                    <Typography textAlign="center" >Document</Typography>

                </SettingMenu>
                <SettingMenu onClick={handleLogout} sx={{ bgcolor: "#30AADD", color: "#fff" }}>
                    <Typography textAlign="center" >Logout</Typography>
                </SettingMenu>

                <VendorProfile open={profile} close={setProfile} />
                <DeleteAccount open={deleteAccount} close={setDelete} />
                <ChangePin open={pin} close={setPin} />
                <Logoutuser open={logout} close={setLogout} />

            </Menu>
        </Box>
    )

}
export default ProfileMenu
