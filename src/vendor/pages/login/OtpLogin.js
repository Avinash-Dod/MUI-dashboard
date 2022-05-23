import { Box, Button, Container, Grid, InputLabel, Stack } from "@mui/material"
import { InputField, PageText } from "../../../components/UI/UI"
import LoginContainer from "../../components/LoginContainer"
import { InputFieldSx, MainContainerSx, PrimaryButton } from "../../styles/VendorSx"

const OtpLogin = () => {
    return (
        <Box >
            <Stack direction="row" flexDirection="row" justifyContent="start" >
                <LoginContainer />
                <Container sx={MainContainerSx} fixed>

                    <Box sx={{ display: "grid", width: "100%", padding: "30px" }} >

                        <PageText name="Login" variant="h4" component="div" mb="7%" textAlign="left" width="100%" />
                        <PageText name="Enter your Login PIN" variant="p" component="div" width="100%"
                            textAlign="left" mb="4%" />
<Stack direction="row" spacing={4} justifyContent="center" flexDirection="row">
                            <InputField sx={InputFieldSx} />
                            <InputField sx={InputFieldSx} />
                            <InputField sx={InputFieldSx} />
                            <InputField sx={InputFieldSx} />
                            </Stack>

                            <Button variant="contained" size="medium" sx={PrimaryButton} >Go </Button>
                            <Button variant="contained" size="medium" disabled sx={PrimaryButton} >Forgot Password </Button>

                    </Box>




                </Container>


            </Stack>
        </Box>

    )
}
export default OtpLogin