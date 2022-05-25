import { Box, Container, Typography } from "@mui/material"
import { VendorIcon } from "../../../components/UI/UI"
import { MsqaureLogoSx, MsqaureSx } from "../../styles/VendorSx"
import MsLogo from '../../assets/logo-white.PNG'
import processing from '../../assets/precessing.png'
import { Text } from "../../styles/styledComponents"

const Processing = () => {
    return (
        <Box >
            <Container sx={{ mt: "4%" }} >

            <VendorIcon sx={MsqaureLogoSx}  >
                <img src={MsLogo} alt="Msquare" style={{ width:"65%" }} />
                
            </VendorIcon>
                <Text name="Hello! Welcome Back." variant="h3" component="p" color="#30AADD"
                    textAlign="center" fontWeight="bold" mb="4%"
                />

                <Text name="Your Account has been Processing..." variant="p" component="p"
                    textAlign="center" fontWeight="bold"
                />

                <VendorIcon sx={MsqaureSx}>
                    <img src={processing} alt="Msquare" style={{ height: "110px", width: "110px" }} />
                </VendorIcon>

                <Typography variant="body1" component="p" >
                    Please wait while processing your request. Will update you under <b style={{ color: "#30AADD" }} > 24 hours</b>
                </Typography>

                <Text name="Thank you for being a part of us." variant="h6" component="p"
                    textAlign="center" fontWeight="bold" color="#30AADD" mt="4%"
                />

            </Container>
        </Box>
    )
}
export default Processing