import { Box, Stack } from "@mui/material"
import { VendorHeader } from "../components/VendorHeader"
import VendorSidebar from "../Sidebar/VendorSidebar"
import { PageContainer, PageText } from "../../components/UI/UI"
import { Text } from "../styles/styledComponents"
import { AboutBoxSX } from "../styles/VendorSx"

const PrivacyPolicy = () => {

    return (
        <Box>
            <VendorHeader />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" >
                <VendorSidebar />
                <PageContainer maxWidth='70%' >
                    <PageText name="Privacy Policy" variant="h4" mt="35px" component="div" color="#30AADD" display="flex" width="100%" />
                    <Box textAlign="justify" sx={{ marginTop: { xs: '18%', md: '18%', lg: '8%', xl: '8%' } }} >

                        <Text name="Lorem Ipsum is simply dummy text of the printing and typesetting industry." variant="h6" component="span" fontWeight="bold" />
                        <Text variant="body1" component="p" mt="1%" mb="2%"
                            name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book."
                        />
                        <Box sx={AboutBoxSX}>
                            <Text name="Why do we use it?" variant="h6" component="span" fontWeight="normal" />
                            <ol >
                                <li> <Text variant="body1" component="p" mb="1%"
                                    name="Lorem Ipsum is simply dummy text." />
                                </li>
                                <li> <Text variant="body1" component="p" mb="1%"
                                    name="Lorem Ipsum is simply dummy text." />
                                </li>

                            </ol>

                        </Box>
                        
                        <Text variant="body1" component="p" mt="1%" mb="2%"
                            name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing."
                        />


                    </Box>
                </PageContainer>

            </Stack>

        </Box>
    )
}
export default PrivacyPolicy