import { Avatar, Box, Button, Container, Stack } from "@mui/material"
import { CardButton, InputField, PageText, VendorIcon, } from "../../../components/UI/UI"
import { MainContainerSx, MsqaureSx, V_ImageContainerSx } from "../../styles/VendorSx"
import Msquare from '../../assets/logo.png'

const VendorLogin=()=>{
    return(
        <Box>
            <Stack direction="row" flexDirection="row" justifyContent="start" >
                <Container sx={V_ImageContainerSx}>
                    <Box>
                    <VendorIcon sx={MsqaureSx}>
                    <img src={Msquare} alt="Msquare" style={{height:"90px",width:"120px"}}/>
                                    </VendorIcon>
                 
                    <PageText name="Welcome to M Square" variant="h3" component="span" mt="8%" color="#ffffff" />     
                    </Box>               
                </Container>
                <Container sx={MainContainerSx} fixed>
                    <Box sx={{display:"grid",width:"100%",padding:"30px"}} >
                    
                    <PageText name="Login" variant="h4" component="div" mb="7%"  textAlign="left" width="100%" />
                    <PageText name="Enter your Mobile Number" variant="body2" component="div" width="50%" 
                      textAlign="left" mb="4%" />

                    <InputField  sx={{width:"100%"}} />
                    <CardButton variant="contained" name="Next" size="medium" /> 
                    <PageText name="Don't have an account?" variant="body2" component="span" mt="4%" width="50%"  />
                    <Button variant="text" w > Sign Up</Button>
                    </Box>

                    
                </Container>





            </Stack>




        
        
        </Box>


    )
}
export default VendorLogin