
import { Box, Container, Stack, Paper } from "@mui/material"
import { Header } from "./Header"
import Sidebar from "./SideBarLeft"


const AddVendor = () => {
    return (
        <Box flexGrow={1}  >
            <Header />
            <Stack direction="row" spacing={2}  >
                <Sidebar />
                <Container maxWidth="xl" >
                    <Paper elevation={3} >
                        
                    </Paper>

                </Container>

            </Stack>

        </Box>
    )
}
export default AddVendor