import { Box, Button, Grid, Stack } from "@mui/material"
import { NavLink } from "react-router-dom"
import { InputField, PageText } from "../../../components/UI/UI"
import { Navlinksx } from "../../../components/utility/adminSX"
import { AccountFields, BackButton, LoginContainer, MainBox, MainContainer, } from "../../styles/styledComponents"
import {  PrimaryButton } from "../../styles/VendorSx"

const SignUpDetails = () => {
    return (
        <Box >
            <Stack direction="row" flexDirection="row" justifyContent="start" >
                <LoginContainer />
                <MainContainer sx={{
                    width: { xs: '99%', md: '99%', lg: '49%', xl: '49%' },
                    marginLeft: { xs: 'none', md: 'none', lg: '50%', xl: '50%' },
                    display:"grid" ,mt:"4%",
                }} >

                    <MainBox  justifyContent="center" display="block" mb="14%"  >
                        <NavLink to="/vendor/otp" >
                            <BackButton />
                        </NavLink>

                        <PageText name="Setup Your Account" variant="h3" component="span" mb="7%" textAlign="left" width="100%" />
                        <PageText name="Enter Your Details" variant="p" component="div" width="100%"
                            textAlign="left" />
                        <Stack justifyContent="flex-start" flexDirection="row"  mb="4%" >
                            <form method="GET">
                                <Grid container  columns={1} >

                                    <Grid item xs={1} >
                                        <AccountFields placeholder="Featured Image"/>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <InputField placeholder="Properietry Name" />
                                    </Grid>
                                    <Grid item xs={1} >
                                        <InputField placeholder="Properietry Type" />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <InputField placeholder="Email" />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <InputField placeholder="Mobile Number" />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <AccountFields placeholder="Pan Card" />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <AccountFields placeholder="Aadhar Card" />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <InputField />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <InputField placeholder="Apna Sweets" />
                                    </Grid>
                                    <Grid item xs={1}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.68784091838!2d75.79380948648985!3d22.72395749652709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1653393351366!5m2!1sen!2sin"
                                     width="650" height="350" style={{border:"0"}} allowFullScreen="" loading="lazy" title="Setup Map"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </Grid>
                                    
                                </Grid>
                                <NavLink to="/vendor/signloginpin" style={Navlinksx} >
                                    <Button variant="contained" type="submit" size="medium" sx={PrimaryButton} >Next</Button>
                                </NavLink>
                            </form>

                        </Stack>
                    </MainBox>
                </MainContainer>


            </Stack>
        </Box>

    )
}
export default SignUpDetails