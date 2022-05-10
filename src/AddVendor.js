
import { Box, Container, Stack,  Typography, Paper } from "@mui/material"
import RegisterForm from "./components/forms/registerForm"
import { Header } from "./components/UI/Header"
import Sidebar from "./components/UI/SideBarLeft"




const AddVendor = () => {
    return (
        <Box flex={1}  >
            <Header />
            <Stack direction="row" spacing={2}  >
                <Sidebar />
                <Container maxWidth="xl">
                    
                   
                    <Paper elevation={3} >    
                    <RegisterForm />
                    </Paper>
                    
                </Container>

            </Stack>

        </Box>
    )
}
export default AddVendor