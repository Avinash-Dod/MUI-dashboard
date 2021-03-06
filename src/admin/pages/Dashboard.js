import { ArrowDropUp, ArrowRightAlt } from "@mui/icons-material"
import { Box,  Card, CardContent,  Grid, Stack,Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { CardButton, PageContainer, PageText } from "../../components/UI/UI"
import { Header } from "../components/AdminHeader"
import Sidebar from "../components/sidebar/AdminSidebar"




const Dashboard = () => {
    const Vendors = [{ 1560: "All Vendors", }, { 200: "Active Vendors" }, { 300: "Inactive Vendors" }]
    const Customers = [{ 1560: "All Customers" }, { 200: "Active Customers" }, { 300: "Inactive Customers" }]
    const Subscribers = [{ 1560: "Free Subscribers" }, { 200: "Paid Subscribers" }, { 300: "Expired Subscribers" }]
    return (
        <Box>
            <Header />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" >
                <Sidebar />
                <PageContainer maxWidth='70%' >
                    <PageText name="Dashboard" variant="h4" mt="35px"
                        component="div"
                        color="#30AADD"
                        display="flex"
                        width="100%" />
                    <PageText name="Vendor" variant="h5" component="div" mt="35px" display="block" />
                    <Grid container marginTop={1}
                        spacing={3} >

                        {Vendors.map(Item => (
                            <Grid item xs={12} md={6} xl={4} key={Object.keys(Item)}>

                                <Card sx={{ bgcolor: "#30AADD21", textAlign: "left" }} >

                                    <CardContent sx={{ textAlign: "left" }} >
                                        <Typography variant="h6" component="span" sx={{ textShadow: "0px,0px ,15px, 0px solid black 1px" }}>
                                            {(Object.values(Item))}
                                        </Typography>

                                    </CardContent>
                                    <CardContent  >
                                        <Typography variant="h4" component="h6" sx={{ fontWeight: "bold", textShadow: "0px,0px ,15px, 0px solid black 1px" }}>
                                            {(Object.keys(Item))}
                                            <ArrowDropUp color="success" fontSize="large" />
                                        </Typography>

                                    </CardContent>
                                    <CardContent>
                                    <NavLink to="/activeCustomer" style={{textDecoration:"none"}} className="active" >
                                        <CardButton variant="contained" name="View" endIcon={<ArrowRightAlt />} />
                                        </NavLink>
                                    </CardContent>

                                </Card>

                            </Grid>
                        ))}

                    </Grid>

                    <PageText name="Customer" variant="h5" component="div" display="block" />
                    <Grid container marginTop={1}
                        spacing={3}                    >

                        {Customers.map(Item => (
                            <Grid item xs={12} md={6} xl={4} key={Object.keys(Item)}>

                                <Card sx={{ bgcolor: "#30AADD21", textAlign: "left" }} >

                                    <CardContent sx={{ textAlign: "left" }} >
                                        <Typography variant="h6" component="span" sx={{ textShadow: "0px,0px ,15px, 0px solid black 1px" }}>
                                            {(Object.values(Item))}
                                        </Typography>
                                    </CardContent>

                                    <CardContent  >
                                        <Typography variant="h4" component="h6" sx={{ fontWeight: "bold", textShadow: "0px,0px ,15px, 0px solid black 1px" }}>
                                            {(Object.keys(Item))}
                                            <ArrowDropUp color="success" fontSize="large" />
                                        </Typography>
                                    </CardContent>

                                    <CardContent>
                                        <CardButton variant="contained" href="/activeCustomer" name="View" endIcon={<ArrowRightAlt />} />
                                    </CardContent>


                                </Card>

                            </Grid>
                        ))}

                    </Grid>

                    <PageText name="Subscriber" variant="h5" component="div" display="block" />
                    <Grid container marginTop={1} spacing={3} >

                        {Subscribers.map(Item => (
                            <Grid item xs={12} md={6} xl={4} key={Object.keys(Item)}>

                                <Card sx={{ bgcolor: "#30AADD21", textAlign: "left" }} >
                                    <CardContent sx={{ textAlign: "left" }} >
                                        <Typography variant="h6" component="span" sx={{ textShadow: "0px,0px ,15px, 0px solid black 1px" }}>
                                            {(Object.values(Item))}
                                        </Typography>
                                    </CardContent>

                                    <CardContent  >
                                        <Typography variant="h4" component="h6" sx={{ fontWeight: "bold", textShadow: "0px,0px ,15px, 0px solid black 1px" }}>
                                            {(Object.keys(Item))}
                                            <ArrowDropUp color="success" fontSize="large" />
                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Grid>
                        ))}

                    </Grid>

                </PageContainer>

            </Stack>

        </Box>
    )
}
export default Dashboard