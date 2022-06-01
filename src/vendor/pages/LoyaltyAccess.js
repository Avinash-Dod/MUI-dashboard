

import { Box, List, ListItem, ListItemAvatar, ListItemText, Stack } from "@mui/material"
import { PageContainer, PageText } from "../../components/UI/UI"
import { VendorHeader } from "../components/VendorHeader"
import VendorSidebar from "../Sidebar/VendorSidebar"
import { Offer, Text, VPageContainer } from "../styles/styledComponents"
import containerImage from '../assets/no-dashboard.png'
import { containerImageSx,  ListSx } from "../styles/VendorSx"
import UserIcon from '../assets/user-100x100.png'

const LoyaltyAccess = () => {

    return (
        <Box >
            <VendorHeader />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" height='100%' >
                <VendorSidebar />
                <PageContainer maxWidth='100%'  >
                    <Box alignContent="center" sx={{ width: { xs: "100%" } }} >

                        <PageText variant="h4" component="div" name="Access User" width="55%" color="#30AADD" mb="7%" mt="4%" textAlign="right" />
                        <Offer variant="contained" color="offer"  >Offer</Offer>
                    </Box>
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
                                <ListItemAvatar sx={{ float: "left" }}>
                                    <img src={UserIcon} alt="location_icon" />
                                </ListItemAvatar>

                                <ListItemText sx={{ width: "100%" }}  >

                                    <Text name="Ajay singh Solanki" variant="h6"
                                        component="p" width="100%" fontWeight="bold" />
                                </ListItemText>

                            </ListItem>

                        </List>

                        {/* <Box sx={{ marginBottom: 5 }}>
                            <img alt="containerImage" src={containerImage} style={containerImageSx} />
                        </Box>

                        <Text name="No Data Available,There is no data to show you right now." mb="2%" variant="h6" component="div" />
                        <CardButton name="Add" startIcon={<Add />} size="medium" onClick={handleOpen} /> */}

                    </VPageContainer>

                </PageContainer>

            </Stack >

        </Box >

    )
}
export default LoyaltyAccess