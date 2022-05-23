import { Box, Container } from "@mui/material"
import { PageText, VendorIcon } from "../../components/UI/UI"
import { MsqaureSx, V_ImageContainerSx } from "../styles/VendorSx"
import Msquare from '../assets/logo.png'

const LoginContainer = () => {
    return (
        <Container sx={V_ImageContainerSx}>
            <Box>
                <VendorIcon sx={MsqaureSx}>
                    <img src={Msquare} alt="Msquare" style={{ height: "90px", width: "120px" }} />
                </VendorIcon>

                <PageText name="Welcome to M Square" variant="h3" component="span" mt="8%" color="#ffffff" />
            </Box>
        </Container>

    )
}
export default LoginContainer