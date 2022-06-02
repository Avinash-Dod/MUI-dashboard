import { Box, Stack } from "@mui/material"
import { VendorHeader } from "../components/VendorHeader"
import VendorSidebar from "../Sidebar/VendorSidebar"
import { PageContainer, PageText } from "../../components/UI/UI"


const HowItWorks = () => {

    return (
        <Box>
            <VendorHeader />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" >
                <VendorSidebar />
                <PageContainer maxWidth='100%'  >
                    <PageText name="How It Work" variant="h4" mt="35px" component="div" color="#30AADD" display="flex" width="100%" />
                    <Box textAlign="justify" sx={{ marginTop: { xs: '18%', md: '18%', lg: '8%', xl: '8%' },width:{ xs: '50%', md: '50%', lg: '8%', xl: '8%' } }} >

                        <iframe width="500" height="300" src="https://www.youtube.com/embed/9xwazD5SyVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>



                    </Box>
                </PageContainer>

            </Stack>

        </Box>
    )
}
export default HowItWorks