

import { ArrowRight, Coffee } from "@mui/icons-material"
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material"
import { Header } from "../components/UI/Header"
import Sidebar from "../components/UI/Sidebar/SideBarLeft"


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
                            <Grid item xs={12} md={4} xl={4} key={Object.keys(Item)}>
                                <Card sx={{ bgcolor: "#ededed" }} >
                                    <CardContent  >
                                        <Coffee color="primary" />
                                    </CardContent>
                                    <CardContent sx={{ mb: "10px" }}>
                                        <Typography variant="h6" component="span" sx={{ color: "#25476a", letterSpacing: "2px", textShadow: "inherit", }}>
                                            {(Object.values(Item))}
                                        </Typography>

                                    </CardContent>
                                    <Button variant="contained" endIcon={<ArrowRight />}>View</Button>
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