import { Box, Button, Grid, Stack } from "@mui/material"
import { NavLink } from "react-router-dom"
import { PageText } from "../../../components/UI/UI"
import { Navlinksx } from "../../../components/utility/adminSX"
import { BackButton, MainBox, MainContainer, LoginContainer, LogoImage } from "../../styles/styledComponents"
import { InputFieldSx, PrimaryButton } from "../../styles/VendorSx"

const ConfirmSignPin = () => {
    return (
        <Box >
            <Stack direction="row" flexDirection="row" justifyContent="start" >
                <LoginContainer />
                <MainContainer sx={{
                    width: { xs: '100%', md: '100%', lg: '50%', xl: '50%' },
                    marginLeft: { xs: 'none', md: 'none', lg: '50%', xl: '50%' }
                }} >
                    
                    <MainBox padding={10} textAlign="center"  >
                    <LogoImage />
                        
                        <NavLink to="/vendor/signloginpin" >
                            <BackButton />
                        </NavLink >

                        <PageText name="Setup Your Account" variant="h3" component="span" mb="7%" textAlign="left" width="100%" />
                        <PageText name="Confirm Your Login PIN" variant="p" component="div" width="100%"
                            textAlign="left" mb="4%" />
                        <Stack justifyContent="flex-start" flexDirection="row" >
                            <form method="GET">
                                <Grid container spacing={2} columns={4}>
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

                                </Grid>
                                <NavLink to="/vendor/dashboard" style={Navlinksx} >

                                    <Button variant="contained" type="submit" size="medium" sx={PrimaryButton} > Next </Button>

                                </NavLink>
                            </form>

                        </Stack>

                    </MainBox>
                </MainContainer>
            </Stack>
        </Box>

    )
}
export default ConfirmSignPin