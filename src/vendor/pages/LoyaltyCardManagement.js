
import { Add } from "@mui/icons-material"
import { Box, Stack } from "@mui/material"
import { CardButton, PageContainer, PageText } from "../../components/UI/UI"
import { VendorHeader } from "../components/VendorHeader"
import VendorSidebar from "../Sidebar/VendorSidebar"
import { Offer, Text, VPageContainer } from "../styles/styledComponents"
import containerImage from '../assets/no-dashboard.png'
import { containerImageSx } from "../styles/VendorSx"
import { useState } from "react"
import AddLoyaltyCard from "../components/modals/AddLoyaltyCard"

const LoyaltyCardManagement = () => {
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

                    <VPageContainer >
                        <Box alignContent="center" sx={{ width: { xs: "100%" } }} >

                            <PageText variant="h4" component="div" name="Loyalty Card management" width="60%" color="#30AADD" mb="7%" mt="4%" textAlign="right" />
                            <Offer variant="contained" color="offer"  >Offer</Offer>
                        </Box>

                        <Box sx={{ marginBottom: 5, justifyContent: "center", mt: "15%" }}>
                            <img alt="containerImage" src={containerImage} style={containerImageSx} />
                        </Box>

                        <Text name="No Data Available,There is no data to show you right now." mb="2%" variant="h6" component="div" />
                        <CardButton name="Add Card" startIcon={<Add />} size="medium" onClick={handleOpen} />

                    </VPageContainer>

                </PageContainer>

                <AddLoyaltyCard open={open} close={setOpen} />


            </Stack >
        </Box >

    )
}
export default LoyaltyCardManagement