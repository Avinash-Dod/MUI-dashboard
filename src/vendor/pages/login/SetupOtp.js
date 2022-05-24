import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { PageText } from "../../../components/UI/UI"
import { Navlinksx } from "../../../components/utility/adminSX"

import { BackButton, LoginContainer, MainBox, MainContainer, } from "../../styles/styledComponents"
import { InputFieldSx, PrimaryButton } from "../../styles/VendorSx"

const SetupOtp = () => {
    return (
        <Box >
            <Stack direction="row" flexDirection="row" justifyContent="start" >
                <LoginContainer />
                <MainContainer sx={{
                    width: { xs: '100%', md: '100%', lg: '50%', xl: '50%' },
                    marginLeft: { xs: 'none', md: 'none', lg: '50%', xl: '50%' }
                }} >

                    <MainBox padding={10} textAlign="center"  >
                        <NavLink to="/vendor/otp" >
                            <BackButton />
                        </NavLink>

                        <PageText name="Setup Your Account" variant="h3" component="span" mb="7%" textAlign="left" width="100%" />
                        <PageText name="Enter OTP" variant="p" component="div" width="100%"
                            textAlign="left" mb="4%" />
                        <Stack justifyContent="flex-start" flexDirection="row" >
                            <form method="GET">
                                <Grid container spacing={2} columns={6}>

                                    <Grid item xs={1}>
                                        <input style={InputFieldSx} type="text" maxLength={1} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <input style={InputFieldSx} type="text" maxLength={1} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <input style={InputFieldSx} type="text" maxLength={1} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <input style={InputFieldSx} type="text" maxLength={1} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <input style={InputFieldSx} type="text" maxLength={1} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <input style={InputFieldSx} type="text" maxLength={1} />
                                    </Grid>

                                    <PageText name="An OTP has been sent to +91XXXXXXXXXX" variant="subtitle2" component="span" textAlign="center" mt="2%" />
                                </Grid>
                                <NavLink to="/vendor/signupdetails" style={Navlinksx} >
                                    <Button variant="contained" type="submit" size="medium" sx={PrimaryButton} >Next</Button>
                                </NavLink>
                            </form>

                        </Stack>
                        <Box display="grid" gridTemplateColumns="repeat(1, 2fr)" gap={2}>
                            <Box gridColumn="span 12" >
                                <Typography variant="body1" component="div"   >
                                    Didn't Get OTP?
                                    <Button variant="text" sx={{ width: "5%", }}>Retry Now</Button>
                                </Typography>

                            </Box>
                        </Box>

                    </MainBox>
                </MainContainer>


            </Stack>
        </Box>

    )
}
export default SetupOtp