import { AppBar, Avatar, Box, Container, Toolbar, Typography } from "@mui/material"
import LogoImage from '../assets/logo.png'
import { Logo } from "./UI/UI"

import UserProfile from "./UI/userProfile"



export const Header = () => {
    return (
        <Box >
            <AppBar position="sticky"   >
                <Container maxWidth="xl" >
                    <Toolbar >
                        <Logo   src={LogoImage} style={{color:"#30Add"}} alt="Logo" color="inherit" />

                        <Typography variant="h6" component="span" sx={{ flexGrow: 1, textAlign: "start", ml: "2px", color: "#ffffff" }} >
                            
                        </Typography>
                        
                        <UserProfile />

                    </Toolbar>
                </Container>

            </AppBar>
        </Box >
    )
}
