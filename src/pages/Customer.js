import { Box, Container, Stack, Card, Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { Header } from "../components/UI/Header"
import Sidebar from "../components/UI/Sidebar/SideBarLeft"
import UserData from '../userData.json'

const Customer = () => {
    const Data = Object.values(UserData)
    const column = [{ field: "id", headerName: "ID", width: 90 },
    { field: "Name", headerName: "Fullname ", width: 200 },
    { field: "email", headerName: "Email ", width: 200 },

    {
        field: "phone",
        headerName: "Phone",
        type: "number",
        width: 200,
        align: "center"
    },
    ]
    const row = Data


    return (
        <Box flex={1}  >
            <Header />
            <Stack direction="row" spacing={2} justifyContent="flex-start " >
                <Sidebar />
                <Container maxWidth="xl"  >
                    <Card elevation={3} sx={{ height: "70%", mt: "1%" }}>
                    {/* <Typography variant="h6" component="span" color="primary">
                        Customers

                    </Typography> */}

                        <DataGrid
                            rows={row}
                            columns={column}
                            pageSize={10}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick

                        >

                        </DataGrid>
                    </Card>


                </Container>

            </Stack>

        </Box>

    )
}
export default Customer