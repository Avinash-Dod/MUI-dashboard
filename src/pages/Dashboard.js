

import {  ArrowDropUp, Coffee } from "@mui/icons-material"
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material"
import { Header } from "../components/UI/Header"
import Sidebar from "../components/UI/SideBarLeft"


const Dashboard = () => {
    const dashboard = [{ 100: "Customer" }, { 200: "Vendor" }, { 300: "Offers" }, { 400: "Cards" }, { 500: "Subscription" }, { 600: "Wallet" }]
    return (
        <Box >
            <Header />
            <Stack direction="row" spacing={1} justifyContent="space-between">
                <Sidebar />
                <Container >

                    <Grid container marginTop={1}
                        spacing={3}

                    >
                        {dashboard.map(Item => (
                            <Grid item xs={12} md={6} xl={3} key={Object.keys(Item)}>
                                <Card sx={{ bgcolor: "#ededed" }} >
                                    <CardContent sx={{ textAlign: "center" }} >
                                        <Coffee color="primary" fontSize="large" />

                                    </CardContent>
                                    <CardContent sx={{ textAlign: "center" }} >
                                        <Typography variant="h4" component="span" sx={{ color: "#25476a", textShadow: "0px,0px ,15px, 0px solid black 1px", textAlign: "center" }}>
                                            {(Object.keys(Item))}
                                            <ArrowDropUp color="success" fontSize="large"  />
                                        </Typography>
                                        
                                        
                                    </CardContent>
                                    <CardContent>
                                        <Typography variant="h6" component="span" sx={{ color: "#25476a", letterSpacing: "1px", textShadow: "inherit", textAlign: "center" }}>
                                            {(Object.values(Item))}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </Stack>

        </Box>
    )
}
export default Dashboard