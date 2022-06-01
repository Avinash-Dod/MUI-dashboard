
import { Add } from "@mui/icons-material"
import { Box, IconButton, List, ListItem, ListItemText, Stack, Switch } from "@mui/material"
import { CardButton, PageContainer, PageText } from "../../components/UI/UI"
import { VendorHeader } from "../components/VendorHeader"
import VendorSidebar from "../Sidebar/VendorSidebar"
import { Text, VPageContainer } from "../styles/styledComponents"
import containerImage from '../assets/no-dashboard.png'
import { containerImageSx, ListSx } from "../styles/VendorSx"
import { useState } from "react"
import AddPrepaidOffer from "../components/modals/AddPrepaidOffer"
import DeleteIcon from '../assets/delete-icon.png'
import EditPrepaidCard from "../components/modals/EditPrepaidCard"
import DeletePrepaidCard from "../components/modals/action modals/DeletePrepaidCard"
import DeactivatePrepaidCard from "../components/modals/action modals/DeactivatePrepaidCard"


const PrepaidCardOffer = () => {
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [Delete, setDelete] = useState(false);
    const [Deactivate, setDeactivate] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleEdit = () => {
        setEdit(true)
    }
    const handleDelete = () => {
        setDelete(true)
    }
    const handleDeactivate = () => {
        setDeactivate(true)
    }

    return (
        <Box >
            <VendorHeader />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" height='100%' >
                <VendorSidebar />
                <PageContainer maxWidth='100%'  >
                    <PageText variant="h4" component="div" name="Prepaid Card Offer" width="100%" color="#30AADD" mt="4%" />

                    <VPageContainer >
                        <List sx={ListSx} >
                            {/* {props.addedItems[1].length ?
(
props.addedItems[1].map(item => {
  return (
    
  )
})
) :
<tr><td colSpan={4}><h3> <i class="fa fa-times-circle"></i> Nothing in Cart</h3></td></tr>
} */}

                            <ListItem sx={{ width: "100%" }}   >

                                <ListItemText sx={{ width: "100%", marginRight: "15%" }} onClick={handleEdit} >

                                    <Text name="100 off on 1000" variant="h6"
                                        component="p" width="100%" fontWeight="bold" />
                                </ListItemText>

                                <ListItemText >
                                    <IconButton onClick={handleDelete}>
                                        <img src={DeleteIcon} alt="location_icon" />
                                    </IconButton>
                                </ListItemText>

                                <ListItemText sx={{ marginLeft: "4%" }}  >
                                    <Switch size="medium" onClick={handleDeactivate} />
                                </ListItemText>

                            </ListItem>

                        </List>

                        <Box sx={{ marginBottom: 5 }}>
                            <img alt="containerImage" src={containerImage} style={containerImageSx} />
                        </Box>

                        <Text name="No Data Available,There is no data to show you right now." mb="2%" variant="h6" component="div" />
                        <CardButton name="Add" startIcon={<Add />} size="medium" onClick={handleOpen} />

                    </VPageContainer>

                </PageContainer>

                <AddPrepaidOffer open={open} close={setOpen} />
                <EditPrepaidCard open={edit} close={setEdit} />
                <DeletePrepaidCard open={Delete} close={setDelete} />
                <DeactivatePrepaidCard open={Deactivate} close={setDeactivate} />
                

            </Stack >

        </Box >

    )
}
export default PrepaidCardOffer