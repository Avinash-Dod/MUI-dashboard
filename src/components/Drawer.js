import { Divider, IconButton, List, ListItem } from '@material-ui/core';
import Drawer from '@mui/material/Drawer'

import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import { ArrowBack, Dashboard, Inbox } from '@mui/icons-material';
import { Typography } from '@mui/material';
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton onClick={handleDrawerOpen} size="medium" edge="start" color="inherit" aria-label='logo' >
        
        <Dashboard />

      </IconButton>

      <Drawer variant="persistent" anchor="left" sx={{position:"relative"}} onClick={handleDrawerClose} open={open} onClose={() => handleDrawerClose()} >
        <IconButton color='inherit'  >
          <ArrowBack />
        </IconButton>
        <Divider />
        <List>
          <ListItem>
            <Inbox />
            <Typography variant='h6' component="div" color="inherit">
              Dashboard
            </Typography>
          </ListItem>

        </List>

      </Drawer>

    </>
  )

}
export default Sidebar