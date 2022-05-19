import { Key } from "@mui/icons-material"
import { Box, Container, Grid,  InputLabel,} from "@mui/material"
import { LoginCard, LoginField, PageText, SubmitButton } from "./UI/UI"


const Login = () => {
    
    return (
        <Box >
            <Container fixed sx={{ height: "100%" }}>
                <LoginCard elevation={3} width="50%" textAlign="center"
                    margin="10% auto" height="auto" bgColor="#30AADD"
                    content={
                        <Box justifyContent="center" textAlign="center" >
                            <Box >
                                <Key sx={{ fontSize: "100px", margin: "auto" }} />
                                <PageText name="ADMIN PANEL" width="100%"
                                    color="#fff" variant="h4"
                                    component="div" textAlign="center"  />
                            </Box>

                            <Grid item xs={8} justifyContent="center" marginTop="15%" padding={1}>
                                <form >
                                    <InputLabel style={{ color: "white", textTransform: "capitalize", marginTop: "3%" }}>USERNAME</InputLabel>
                                    <LoginField color="other" variant="standard" size="medium" sx={{ width: "100%", margin: "2% 0px 2% 0px" }} />
                                    <InputLabel style={{ color: "white", textTransform: "capitalize", marginTop: "3%" }}>PASSWORD</InputLabel>
                                    <LoginField color="other" type="password"  variant="outlined" size="medium" sx={{ width: "100%"}}  />
                                    
                                    <SubmitButton variant="contained" type="submit"
                                        color="secondary"
                                        sx={
                                            {
                                                padding: "12px",
                                                width: "100%"
                                            }}
                                        size="large">Login</SubmitButton>

                                </form>
                            </Grid>
                        </Box>
                    }
                >
                </LoginCard>
            </Container>
        </Box>
    )
}
export default Login