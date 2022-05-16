import { AppBar, Avatar, Box, Container, Toolbar, Typography } from "@mui/material"
import Logo from '../assets/logo-icon.png'
import { HeaderApp } from "./UI/UI"
import UserProfile from "./UI/userProfile"



export const Header = () => {
    return (
        <Box >
            <AppBar position="sticky"   >
                <Container maxWidth="xl" >
                    <Toolbar >
                        <Avatar sx={{borderRadius:"0px",padding:2,bgcolor:"transparent"}}><img  src={Logo} style={{backgroundColor:"white",color:"#30Add"}} alt="Logo" color="inherit" /></Avatar>

                        <Typography variant="h6" component="span" sx={{ flexGrow: 1, textAlign: "start", ml: "2px", color: "#ffffff" }} >
                            Sqaure
                        </Typography>
                        
                        <UserProfile />

                    </Toolbar>
                </Container>

            </AppBar>
        </Box >
    )
}
