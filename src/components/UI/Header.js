import { Store } from "@mui/icons-material"
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"
import UserProfile from "./userProfile"


export const Header = () => {
    return (
        <Box >
            <AppBar position="sticky"  >
                <Container maxWidth="xl">
                    <Toolbar >
                        <Store />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "start", ml: "2px" }} >
                            M - Sqaure
                        </Typography>
                        <Typography position="relative" p={2}>
                            Admin Name
                        </Typography>
                        <UserProfile />

                    </Toolbar>
                </Container>

            </AppBar>
        </Box >
    )
}
