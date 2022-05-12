
import { Box, Container, Stack, Paper } from "@mui/material"
import RegisterForm from "./forms/registerForm"
import { Header } from "./UI/Header"
import Sidebar from "./UI/SideBarLeft"

const AddVendor = () => {
    return (
        <Box flexGrow={1}  >
            <Header />
            <Stack direction="row" spacing={2}  >
                <Sidebar />
                <Container maxWidth="xl" >
                    <Paper elevation={3} >
                        <RegisterForm />
                    </Paper>

                </Container>

            </Stack>

        </Box>
    )
}
export default AddVendor