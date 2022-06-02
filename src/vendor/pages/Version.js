import { Box, Stack } from "@mui/material"
import { VendorHeader } from "../components/VendorHeader"
import VendorSidebar from "../Sidebar/VendorSidebar"
import { PageContainer, PageText } from "../../components/UI/UI"
import { Text } from "../styles/styledComponents"
import { AboutBoxSX, VersionBoxSx } from "../styles/VendorSx"
import versionLogo from '../assets/version-logo.png'

const Version = () => {

    return (
        <Box>
            <VendorHeader />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" >
                <VendorSidebar />
                <PageContainer maxWidth='70%' >
                    <PageText name="Version" variant="h4" mt="35px" component="div" color="#30AADD" display="flex" width="100%" />

                    <Box textAlign="justify" sx={{ marginTop: { xs: '18%', md: '18%', lg: '8%', xl: '8%' } }} >

                        <Box sx={VersionBoxSx}>
                            <img src={versionLogo} alt="logo_version" />
                            <Text variant="h6" component="p" mt="1%" mb="2%" name="Version " fontWeight="normal" mr="2%" ml="5%" />
                            <Text variant="h6" component="p" mt="1%" mb="2%" name=" 0.00.001" />
                        </Box>

                        <Text name="Release Notes" variant="h6" component="span" fontWeight="bold" />
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
                                <li> <Text variant="body1" component="p" mb="1%"
                                    name="Lorem Ipsum is simply dummy text." />
                                </li>
                            </ol>

                        </Box>
                        <Text name="The printing and typesetting industry." variant="h6" component="span" fontWeight="bold" />

                        <Text variant="body1" component="p" mt="1%" mb="2%"
                            name="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
                        />
                    </Box>
                </PageContainer>

            </Stack>

        </Box>
    )
}
export default Version