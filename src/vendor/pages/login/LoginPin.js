import { Box, Button, Grid, Stack } from "@mui/material"
import { NavLink } from "react-router-dom"
import { PageText } from "../../../components/UI/UI"
import { Navlinksx } from "../../../components/utility/adminSX"
import { LoginContainer, LogoImage, MainBox, MainContainer } from "../../styles/styledComponents"
import { InputFieldSx, PrimaryButton } from "../../styles/VendorSx"

const LoginPin = () => {
    
    return (
        <Box >
            <Stack direction="row" flexDirection="row" justifyContent="start" >
                <LoginContainer />
                <MainContainer sx={{
                    width: { xs: '100%', md: '100%', lg: '50%', xl: '50%' },
                    marginLeft: { xs: 'none', md: 'none', lg: '50%', xl: '50%' }
                }} >

                    <MainBox padding={12} textAlign="center" >
                        <LogoImage />

                        <PageText name="Login" variant="h3" component="span" mb="7%" textAlign="left" width="100%" />
                        <PageText name="Enter your Login PIN" variant="p" component="div" width="100%"
                            textAlign="left" mb="4%" />
                        <Stack spacing={1} justifyContent="center" flexDirection="row" >
                            <form>
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
                            </form>
                        </Stack>

                        <NavLink to="/vendor/branches" style={Navlinksx} >
                            <Button variant="contained" size="medium" sx={PrimaryButton} >Go </Button>
                        </NavLink>
                        <Button variant="contained" color="primary" size="medium" disabled sx={PrimaryButton} >Forgot Login PIN </Button>

                    </MainBox>
                </MainContainer>


            </Stack>
        </Box>

    )
}
export default LoginPin