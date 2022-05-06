

import {  ArrowRight, Coffee } from "@mui/icons-material"
import { Box, Button, Card, CardContent, Container, Stack, Typography } from "@mui/material"
import { Header } from "../components/UI/Header"
import Sidebar from "../components/UI/Sidebar/SideBarLeft"


const Dashboard = () => {
    const dashboard = [{ 100: "Customer" }, { 200: "Vendor" }, { 300: "Offers" }, { 400: "Cards" }, { 500: "Subscription" }, { 600: "Wallet" }]
    return (
        <Box >
            <Header />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar />
                <Container >

                    <Box marginTop={2}
                        sx={{
                            display: 'grid',
                            columnGap: 4,
                            rowGap: 3,
                            gridTemplateColumns: 'repeat(3, 1fr)',
                        }}
                    >
                        {dashboard.map(Item => (
                            <Card sx={{ bgcolor: "#ededed" }} key={Object.keys(Item)}>
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
                        ))}
                    </Box>
                </Container>

            </Stack>

        </Box>
    )
}
export default Dashboard