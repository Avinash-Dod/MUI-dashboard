
import { ExpandMore } from "@mui/icons-material"
import { List, Container, Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material"
import { NavLink } from "react-router-dom"
import { SideList } from "../../components/UI/UI"
import { AccordianSx, Navlinksx, SidebarSX } from "../../components/utility/adminSX"



const VendorSidebar = () => {
    return (

        <Container sx={SidebarSX} >

            <List sx={{ mt: 5, mr: "15%" }}>
                <NavLink to="/vendor/dashboard" style={Navlinksx}>
                    <SideList Text="Dashboard" />
                </NavLink>

                <NavLink to="/vendor/dashboard" className="active" style={Navlinksx}>
                    <SideList Text="Group Management" />
                </NavLink>

                <NavLink to="/vendor/dashboard" style={Navlinksx}>
                    <SideList Text="Branch Mangement" />
                </NavLink>

                <NavLink to="/vendor/dashboard" style={Navlinksx}>
                    <SideList Text="User Mangement" />
                </NavLink>

                <Accordion sx={AccordianSx} disableGutters elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandMore color="other" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Offer Management</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <NavLink to="/vendor/dashboard" style={Navlinksx}>
                            <SideList Text="General" />
                        </NavLink>

                        <NavLink to="/vendor/dashboard" style={Navlinksx}>
                            <SideList Text="Prepaid Cards" />
                        </NavLink>

                        <NavLink to="/vendor/dashboard" style={Navlinksx}>
                            <SideList Text="Loyalty Card" />
                        </NavLink>

                    </AccordionDetails>
                </Accordion>


                <NavLink to="/vendor/dashboard" style={Navlinksx}>
                    <SideList Text="Coupons Mangement" />
                </NavLink>

                <NavLink to="/vendor/dashboard" style={Navlinksx}>
                    <SideList Text="Prepaid Card Mangement" />
                </NavLink>

                <NavLink to="/vendor/dashboard" style={Navlinksx}>
                    <SideList Text="Loyalty Point Management" />
                </NavLink>

                <Accordion sx={AccordianSx} disableGutters elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandMore color="other" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Support</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NavLink to="/vendor/dashboard" style={Navlinksx}>
                            <SideList Text="About Us" />
                        </NavLink>
                        <NavLink to="/vendor/dashboard" style={Navlinksx}>
                            <SideList Text="Terms & Conditions" />
                        </NavLink>
                        <NavLink to="/vendor/dashboard" style={Navlinksx}>
                            <SideList Text="Privacy Policy" />
                        </NavLink>
                        <NavLink to="/vendor/dashboard" style={Navlinksx}>
                            <SideList Text="Faq's" />
                        </NavLink>
                        <NavLink to="/vendor/dashboard" style={Navlinksx}>
                            <SideList Text="How it Work's" />
                        </NavLink>
                        <NavLink to="/vendor/dashboard" style={Navlinksx}>
                            <SideList Text="Need Help" />
                        </NavLink>
                        <NavLink to="/vendor/dashboard" style={Navlinksx}>
                            <SideList Text="Version" />
                        </NavLink>

                    </AccordionDetails>
                </Accordion>

            </List>

        </Container>

    )
}
export default VendorSidebar
