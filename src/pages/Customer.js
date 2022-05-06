import { Box, Card, Stack, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Paper } from "@mui/material"
import { Header } from "../components/UI/Header"
import Sidebar from "../components/UI/Sidebar/SideBarLeft"

const Customer=()=>{
    return(
        <Box flex={1}  >
            <Header />
            <Stack direction="row"  spacing={2} justifyContent="flex-start " >
            <Sidebar />
            <Card elevation={3}  sx={{height:"50%"}}>
            <TableContainer  sx={{float:"left"}}>
                <Table >
                    <TableHead >
                        <TableRow >
                            <TableCell align="left">Id</TableCell>
                            <TableCell aligm="left">Name</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="center" >Email</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>

            </TableContainer>
            </Card>
            </Stack>

        </Box>

    )
}
export default Customer