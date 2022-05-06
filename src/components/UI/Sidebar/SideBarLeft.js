import { Box } from "@material-ui/core"
import { Person, Group, Dashboard, ModeNight } from "@mui/icons-material"
import { List, Typography, ListItemButton, ListItemIcon, Switch, ListItem, Divider } from "@mui/material"

const Sidebar = () => {

  return (
    <Box flexGrow={1} p={2} >
      <Box position="fixed">
        <List sx={{ bgcolor: "#ededed", color: "#25476a", textAlign: "center", fontWeight: "bolder",height:"680px" }}>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon sx={{ color: "inherit" }}>
                <Dashboard />
              </ListItemIcon   >
              <Typography variant="h6" component="span" sx={{ color: "25476a", letterSpacing: "1px" }}>
                Dashboard
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon sx={{ color: "inherit" }}>
                <Group />
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
