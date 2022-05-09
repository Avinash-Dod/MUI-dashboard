import { Box } from "@material-ui/core"
import { Person, Dashboard, ModeNight, AddBusiness } from "@mui/icons-material"
import { List, Typography, ListItemButton, ListItemIcon, Switch, ListItem, Divider, Paper } from "@mui/material"

const Sidebar = () => {

  return (
    <Box flex={1}>
      <Box position="fixed">
        <List sx={{ bgcolor: "#ededed", color: "#25476a", textAlign: "center", fontWeight: "bolder", height: "1000px" }} component={Paper}>
          <ListItem disablePadding xs="0px" >
            <ListItemButton  >
              <ListItemIcon sx={{ color: "inherit" }}>
                <Dashboard />
              </ListItemIcon   >
              <Typography variant="h6" component="span" sx={{ color: "25476a", letterSpacing: "1px" }}  >
                Dashboard
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  >
              <ListItemIcon sx={{ color: "inherit" }} >
                <AddBusiness />
              </ListItemIcon   >
              <Typography variant="h6" component="span" sx={{ color: "25476a", letterSpacing: "1px" }}>
                Vendor
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "inherit" }}>
                <Person />
              </ListItemIcon>
              <Typography variant="h6" component="span" sx={{ color: "25476a", letterSpacing: "1px" }} >
                Customer
              </Typography>
            </ListItemButton>
          </ListItem>
          <Divider textAlign="center">
            <Typography variant="h6" component="span" >
              Settings

            </Typography>
          </Divider>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "inherit" }}>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>

  )
}
export default Sidebar
