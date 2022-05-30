
import { Add } from "@mui/icons-material"
import { Box, Stack } from "@mui/material"
import {  CardButton,  PageContainer, PageText } from "../../components/UI/UI"
import { VendorHeader } from "../components/VendorHeader"
import VendorSidebar from "../Sidebar/VendorSidebar"
import { Text, VPageContainer } from "../styles/styledComponents"
import containerImage from '../assets/no-dashboard.png'
import { containerImageSx } from "../styles/VendorSx"
import { useState } from "react"
import AddGroup from "../components/modals/AddGroup"

const GroupManagement = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <Box >
            <VendorHeader />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" height='100%' >
                <VendorSidebar />
                <PageContainer maxWidth='100%'  >
                {/* <List >
                                {location.map(branch => (
                                    <>
                                        <BranchList color="#666" key={Object.keys(branch.address)} >
                                            <ListItem sx={{ width: "100%" }}   >

                                                <ListItemAvatar sx={{ float: "left" }}>
                                                    <img src={branch.src} alt={branch.BranchName} />
                                                </ListItemAvatar>
                                                <ListItemText sx={{ width: "100%",marginRight:"15%" }} >
                                                    <Text name={branch.BranchName} variant="p"
                                                        component="p" width="100%" fontWeight="bold" />

                                                    <Text name={branch.address} variant="subtitle2"
                                                        component="div" fontWeight="normal" width="100%" fontSize="12px"  />

                                                </ListItemText>
                                                <ListItemText >
                                                    <ArrowForwardIos />
                                                </ListItemText>


                                            </ListItem>
                                        </BranchList>
                                        <Divider />
                                    </>

                                ))}

                            </List> */}
                    <VPageContainer >

                        <PageText variant="h4" component="div" name="Group Management" width="100%" color="#30AADD" mb="6%" mt="4%" />
                        <Box sx={{ marginBottom: 5 }}>
                            <img alt="containerImage" src={containerImage} style={containerImageSx} />
                        </Box>

                        <Text name="No Data Available,There is no data to show you right now." mb="2%" variant="h6" component="div" />
                        <CardButton name="Add" startIcon={<Add />} size="medium" onClick={handleOpen} />
                        
                    </VPageContainer>                    

                </PageContainer>
                <AddGroup open={open} close={setOpen} />
            </Stack >

        </Box >

    )
}
export default GroupManagement