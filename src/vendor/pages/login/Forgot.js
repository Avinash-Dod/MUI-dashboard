import { Box, Button,  Stack  } from "@mui/material"
import { InputField, PageText, } from "../../../components/UI/UI"
import { PrimaryButton } from "../../styles/VendorSx"

import { BackButton, LoginContainer, MainBox, MainContainer } from "../../styles/styledComponents"

import { NavLink } from "react-router-dom"
import { Navlinksx } from "../../../components/utility/adminSX"

const ForgotLoginPin = () => {
    return (
        <Box>
            <Stack flexDirection="row" justifyContent="start" >
                <LoginContainer />
                <MainContainer   sx={{width:{ xs:'100%', md:'100%',lg:'50%',xl:'50%' },
                     marginLeft:{xs:'none', md:'none',lg:'50%',xl:'50%'}}} fixed>
                <MainBox padding={10} textAlign="center"
                    >
                         
                        <NavLink to="/vendor/otp" >
                        <BackButton />
                        </NavLink>

                        <PageText name="Forgot Login Pin" variant="h3" component="div" mb="7%" textAlign="left" width="100%" />
                        <PageText name="Enter your Mobile Number" variant="body1" component="div" width="50%"
                            textAlign="left" mb="4%" />
                        <InputField sx={{ width: "100%" }} />
                        <NavLink to="/vendor/forgotOtp" sx={Navlinksx} >
                        <Button variant="contained" size="medium" sx={PrimaryButton} >Next </Button>
                        </NavLink>

                       

                    </MainBox>
                </MainContainer>
            </Stack>
        </Box>

    )
}
export default ForgotLoginPin