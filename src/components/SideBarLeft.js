
import { Person, Dashboard, Store } from "@mui/icons-material"
import { List, Container, Tab, Box } from "@mui/material"
import { NavLink } from "react-router-dom"
import { SideList } from "./UI/UI"


const Sidebar = () => {

  return (
    
    <Container sx={{ bgcolor: "#30AADD", color: "#25476a", textAlign: "center", maxHeight: '100%', width: "17%" }}   >

      <List  sx={{mt:3}}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
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
