import { Box } from "@material-ui/core"
import { Person, Dashboard, ModeNight, Store } from "@mui/icons-material"
import { List, Typography, Switch, ListItem, Divider, Grid, Drawer, Container } from "@mui/material"
import { NavLink } from "react-router-dom"
import { SideList, } from "./UI"

const Sidebar = () => {

  return (
    <Container sx={{ bgcolor: "#30AADD", color: "#25476a", textAlign: "center",maxHeight:'100%',width:"15%" }}   >
      
        <List >
          <NavLink to="/" style={{ color: "#25476a", textDecoration: "none" }}>
            <SideList Text="Dashboard" Icon={<Dashboard />} />
          </NavLink>


          <NavLink to="/customer" style={{ color: "#25476a", textDecoration: "none" }}>
            <SideList Text="Customer" Icon={<Person />} />
          </NavLink>



          <NavLink to="/vendor" style={{ color: "#25476a", textDecoration: "none" }}>
            <SideList Text="Vendor" Icon={<Store />} />
          </NavLink>


          
        </List>

      
    </Container>

  )
}
export default Sidebar
