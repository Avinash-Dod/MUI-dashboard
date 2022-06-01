import { Box, Stack, Card } from "@mui/material"
import { PageContainer, PageText } from "../../components/UI/UI"
import { VendorHeader } from "../components/VendorHeader"
import VendorSidebar from "../Sidebar/VendorSidebar"
import { Offer, Text, VPageContainer } from "../styles/styledComponents"
import { useState } from "react"
import { CardSx } from "../styles/VendorSx"
import '../styles/style.css'
import AddLoyaltyUser from "../components/modals/AddLoyaltyUser"

const MyLoyaltyCard = () => {
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

                            <PageText variant="h4" component="div" name="My Loyalty Card" width="55%" color="#30AADD" mb="5%" mt="4%" textAlign="right" />
                            <Offer variant="contained" color="offer"  >Offer</Offer>
                        </Box>
                        <Box sx={{ marginBottom: 5 }}>
                            <Card elevation={2} sx={CardSx} onClick={handleOpen}>

                                <div className="card-design">
                                    <div className="cardBox">
                                        <Text name="Apna Sweets" variant="body1" />
                                        <h2>Silver Card</h2>
                                    </div>
                                </div>
                            </Card>
                        </Box>
                    </VPageContainer>

                </PageContainer>

                <AddLoyaltyUser open={open} close={setOpen} />

            </Stack >
        </Box >

    )
}
export default MyLoyaltyCard