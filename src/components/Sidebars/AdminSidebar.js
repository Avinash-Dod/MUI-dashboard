
import { Person, Dashboard, Store } from "@mui/icons-material"
import { List, Container } from "@mui/material"
import { NavLink } from "react-router-dom"
import { SideList } from "../UI/UI"



const Sidebar = () => {

  return (

    <Container sx={{ position: "fixed", height: "100%", mt: "64px", bgcolor: "#30AADD", color: "#25476a", textAlign: "center", maxHeight: '100%', width: "15%", zIndex: 1200 }}   >

      <List sx={{ mt: 3 }}>
        <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
          <SideList Text="Dashboard" Icon={<Dashboard />} />
        </NavLink>
        <NavLink to="/vendor" className="active" style={{ color: "#25476a", textDecoration: "none" }}>
          <SideList Text="Vendor" Icon={<Store />} />
        </NavLink>
        <NavLink to="/customer" style={{ color: "#25476a", textDecoration: "none" }}>
          <SideList Text="Customer" Icon={<Person />} />
        </NavLink>
      </List>

    </Container>


  )
}
export default Sidebar
