import { AddBusiness } from "@mui/icons-material"
import { Box, Container, Stack, Card, Button, Link } from "@mui/material"
import { DataGrid, GridToolbar, } from "@mui/x-data-grid"
import { Header } from "../components/UI/Header"
import Sidebar from "../components/UI/SideBarLeft"

import UserData from '../userData.json'

const Vendor = () => {
    const Data = Object.values(UserData)
    const column = [{ field: "id", headerName: "ID", width: 90 },
    { field: "Name", headerName: "Fullname ", width: 200 },
    { field: "email", headerName: "Email ", width: 200 },

    {
        field: "phone",
        headerName: "Phone",
        type: "string",
        width: 200,
        textAlign: "center"
    },
    {
        field: "actions", headerName: "Action", width: 300, textAlign: "center",
        
    }
    ]
    const row = Data


    return (
        <Box flex={1}  >
            <Header />
            <Stack direction="row" spacing={2} justifyContent="flex-start " >
                <Sidebar />
                <Container maxWidth="xl" >
                    <Link href="/addVendor" ><Button variant="contained" aria-label="Add Business" startIcon={<AddBusiness />}>Add Vendor</Button></Link>


                    <Card elevation={3} sx={{ height: "70%", mt: "1%" }}>
                        {/* <Typography variant="h6" component="span" color="primary">
                    Vendors

                </Typography> */}

                        <DataGrid
                            rows={row}
                            columns={column}
                            pageSize={10}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                            components={{ Toolbar: GridToolbar }}

                        >

                        </DataGrid>
                    </Card>


                </Container>

            </Stack>

        </Box>
    )
}
export default Vendor