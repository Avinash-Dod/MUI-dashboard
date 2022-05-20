
import { List, Container } from "@mui/material"
import { NavLink } from "react-router-dom"
import { SideList } from "../UI/UI"
import { Navlinksx, SidebarSX } from "../utility/adminSX"

const VendorSidebar = () => {

    return (

        <Container sx={SidebarSX}   >

            <List sx={{ mt: 3 }}>
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

                <NavLink to="/vendor/dashboard" style={Navlinksx}>
                    <SideList Text="Offer Mangement" />
                </NavLink>

                <NavLink to="/vendor/dashboard" style={Navlinksx}>
                    <SideList Text="Coupons Mangement" />
                </NavLink>

                <NavLink to="/vendor/dashboard" style={Navlinksx}>
                    <SideList Text="Prepaid Card Mangement" />
                </NavLink>

                <NavLink to="/vendor/dashboard" style={Navlinksx}>
                    <SideList Text="Loyalty Point Management" />
                </NavLink>

                <NavLink to="/vendor/dashboard" style={Navlinksx}>
                    <SideList Text="Support" />
                </NavLink>
            </List>

        </Container>


    )
}
export default VendorSidebar
