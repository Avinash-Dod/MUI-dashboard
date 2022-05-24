import { Box, Button, Stack, Typography } from "@mui/material"
import { InputField, PageText, } from "../../../components/UI/UI"
import { PrimaryButton } from "../../styles/VendorSx"
import { MainBox, MainContainer, LoginContainer } from "../../styles/styledComponents"
import { NavLink } from "react-router-dom"
import { Navlinksx } from "../../../components/utility/adminSX"

const SignUp = () => {
    return (
        <Box>
            <Stack direction="row" flexDirection="row" justifyContent="start" >
                <LoginContainer />
                <MainContainer sx={{
                    width: { xs: '100%', md: '100%', lg: '50%', xl: '50%' },
                    marginLeft: { xs: '0%', md: '0%', lg: '50%', xl: '50%' }
                }} fixed>
                    <MainBox padding={10} textAlign="center"
                    >
                        <PageText name="Setup Your Account" variant="h4" component="div" mb="7%" textAlign="left" width="100%" />
                        <PageText name="Enter your Mobile Number" variant="p" component="div" width="50%"
                            textAlign="left" mb="4%" />
                        <InputField sx={{ width: "100%" }} />
                        <NavLink to="/vendor/setupotp" style={Navlinksx} >
                            <Button variant="contained" size="medium" sx={PrimaryButton} >Next </Button>
                        </NavLink>
                        <Box display="grid" gridTemplateColumns="repeat(1, 2fr)" gap={2}>
                            <Box gridColumn="span 12" >
                                <Typography variant="body1" component="div"   >
                                    Already have an account?
                                    <NavLink to="/vendor/vLogin" style={Navlinksx} >
                                    <Button variant="text" sx={{ width: "5%", }}>Log In</Button>
                                    </NavLink>
                                </Typography>

                            </Box>
                        </Box>

                    </MainBox>
                </MainContainer>
            </Stack>
        </Box>

    )
}
export default SignUp