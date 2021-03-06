import { Box, Stack } from "@mui/material"
import { VendorHeader } from "../components/VendorHeader"
import VendorSidebar from "../Sidebar/VendorSidebar"
import { PageContainer, PageText } from "../../components/UI/UI"
import { Text } from "../styles/styledComponents"
import { AboutBoxSX } from "../styles/VendorSx"

const Terms = () => {

    return (
        <Box>
            <VendorHeader />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" >
                <VendorSidebar />
                <PageContainer maxWidth='70%' >
                    <PageText name="Terms & Conditions" variant="h4" mt="35px" component="div" color="#30AADD" display="flex" width="100%" />
                    <Box textAlign="justify"sx={{ marginTop: { xs: '18%', md: '18%', lg: '8%', xl: '8%' } }} >

                        <Text name="Lorem Ipsum is simply dummy text of the printing and typesetting industry." variant="h6" component="span" fontWeight="bold" />
                        <Text variant="body1" component="p" mt="1%" mb="2%"
                            name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book."
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

                        <Text variant="body1" component="p" mt="1%" mb="2%"
                            name='"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
                        />
                        <Text variant="body1" component="p" mt="1%" mb="2%"
                            name='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                        />
                    </Box>
                </PageContainer>

            </Stack>

        </Box>
    )
}
export default Terms