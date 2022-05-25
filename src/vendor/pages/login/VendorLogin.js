import { Box, Button, Stack, Typography } from "@mui/material"
import { InputField, PageText, } from "../../../components/UI/UI"
import { PrimaryButton } from "../../styles/VendorSx"

import { MainBox, MainContainer, LoginContainer, LogoImage } from "../../styles/styledComponents"
import { NavLink } from "react-router-dom"
import { Navlinksx } from "../../../components/utility/adminSX"

const VendorLogin = () => {
    return (
        <Box>

            <Stack direction="row" flexDirection="row" justifyContent="start" >
                <LoginContainer />

                <MainContainer sx={{
                    width: { xs: '100%', md: '100%', lg: '50%', xl: '50%' },
                    marginLeft: { xs: 'none', md: 'none', lg: '50%', xl: '50%' }
                }} fixed>

                    <MainBox padding={1} textAlign="center"                    >
                        <LogoImage />

                        <PageText name="Login" variant="h3" component="div" mb="7%" textAlign="left" width="100%" />
                        <PageText name="Enter your Mobile Number" variant="p" component="div" width="100%"
                            textAlign="left" mb="4%" />
                        <InputField sx={{ width: "100%" }} placeholder="9876543210" />
                        <NavLink to="/vendor/loginpin" style={Navlinksx} >
                            <Button variant="contained" size="medium" sx={PrimaryButton} >Next </Button>
                        </NavLink>

                        <Typography variant="p" component="p" sx={{ padding: "5%" }}   >
                            Don't have an account?
                            <NavLink to="/vendor/signup" style={Navlinksx} >
                                <b style={{ color: "#30AADD" }}> Sign Up</b>
                            </NavLink>
                        </Typography>

                    </MainBox>
                </MainContainer>
            </Stack>
        </Box>

    )
}
export default VendorLogin