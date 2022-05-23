import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { InputField, PageText, } from "../../../components/UI/UI"
import { MainContainerSx,  PrimaryButton, TextLinkSx} from "../../styles/VendorSx"

import LoginContainer from "../../components/LoginContainer"

const VendorLogin = () => {
    return (
        <Box>
            <Stack direction="row" flexDirection="row" justifyContent="start" >
              <LoginContainer />
                <Container sx={MainContainerSx} fixed>
                    <Box sx={{ display: "grid", width: "100%", padding: "30px" }} >

                        <PageText name="Login" variant="h4" component="div" mb="7%" textAlign="left" width="100%" />
                        <PageText name="Enter your Mobile Number" variant="p" component="div" width="50%"
                            textAlign="left" mb="4%" />

                        <InputField sx={{ width: "100%" }} />
                        <Button variant="contained" size="medium" sx={PrimaryButton} >Next </Button>
                        <Box textAlign="center" sx={TextLinkSx}>
                            <Typography variant="body1" component="p"  >
                                Don't have an account?
                            </Typography>
                            <Button variant="text" >SignUp</Button>
                        </Box>
                    </Box>


                </Container>





            </Stack>
        </Box>

    )
}
export default VendorLogin