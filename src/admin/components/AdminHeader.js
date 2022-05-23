import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"
import { Logo } from "../../components/UI/UI"
import LogoImage from '../assets/logo.png'
import AdminProfile from "./AdminProfile"

export const Header = () => {
    return (
        <Box >
            <AppBar position="sticky"   >
                <Container maxWidth="xl" >
                    <Toolbar >
                        <Logo src={LogoImage} style={{color:"#30Add"}} alt="Logo" color="inherit" />

                        <Typography variant="h6" component="span" sx={{ flexGrow: 1, textAlign: "start", ml: "2px", color: "#ffffff" }} >
                            
                        </Typography>                        
                        <AdminProfile />

                    </Toolbar>
                </Container>

            </AppBar>
        </Box >
    )
}
