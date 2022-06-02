
import { List, Container, Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material"
import { NavLink } from "react-router-dom"
import { SideList } from "../../components/UI/UI"
import { AccordianSx, Navlinksx, SidebarSX } from "../../components/utility/adminSX"
import { Expand } from "../styles/styledComponents"

const VendorSidebar = () => {
    return (

        <Container sx={SidebarSX} >

            <List sx={{ mt: 10, padding: 0 }}>
                <NavLink to="/vendor/dashboard" style={Navlinksx}>
                    <SideList Text="Dashboard" />
                </NavLink>

                <NavLink to="/vendor/groupmanagement" className="active" style={Navlinksx}>
                    <SideList Text="Group Management" />
                </NavLink>

                <NavLink to="/vendor/branchmanagement" style={Navlinksx}>
                    <SideList Text="Branch Mangement" />
                </NavLink>

                <NavLink to="/vendor/usermanagement" style={Navlinksx}>
                    <SideList Text="User Mangement" />
                </NavLink>

                <Accordion sx={AccordianSx} disableGutters elevation={0}>
                    <AccordionSummary
                        expandIcon={<Expand color="other" />}
                    >
                        <Typography>Offer Management</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <NavLink to="/vendor/generaloffer" style={Navlinksx}>
                            <SideList Text="General" />
                        </NavLink>

                        <NavLink to="/vendor/prepaidcardoffer" style={Navlinksx}>
                            <SideList Text="Prepaid Card" />
                        </NavLink>

                        <NavLink to="/vendor/loyaltycardoffer" style={Navlinksx}>
                            <SideList Text="Loyalty Card" />
                        </NavLink>

                    </AccordionDetails>
                </Accordion>

                <NavLink to="/vendor/couponmanagement" style={Navlinksx}>
                    <SideList Text="Coupons Mangement" />
                </NavLink>

                <NavLink to="/vendor/prepaidcardmanagement" style={Navlinksx}>
                    <SideList Text="Prepaid Card Mangement" />
                </NavLink>

                <NavLink to="/vendor/loyaltycardmanagement" style={Navlinksx}>
                    <SideList Text="Loyalty Card Management" />
                </NavLink>

                <Accordion sx={AccordianSx} disableGutters elevation={0}>
                    <AccordionSummary
                        expandIcon={<Expand />}
                    >
                        <Typography>Support</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <NavLink to="/vendor/about" style={Navlinksx}>
                            <SideList Text="About Us" />
                        </NavLink>

                        <NavLink to="/vendor/terms&conditions" style={Navlinksx}>
                            <SideList Text="Terms & Conditions" />
                        </NavLink>

                        <NavLink to="/vendor/privacypolicy" style={Navlinksx}>
                            <SideList Text="Privacy Policy" />
                        </NavLink>
                        <NavLink to="/vendor/faq" style={Navlinksx}>
                            <SideList Text="Faq's" />
                        </NavLink>
                        <NavLink to="/vendor/howitwork" style={Navlinksx}>
                            <SideList Text="How it Work's" />
                        </NavLink>
                        <NavLink to="/vendor/version" style={Navlinksx}>
                            <SideList Text="Version" />
                        </NavLink>

                    </AccordionDetails>
                </Accordion>
            </List>

        </Container>

    )
}
export default VendorSidebar
