import { AddBusiness } from "@mui/icons-material"
import { Container, Stack, Grid, Box } from "@mui/material"
import { DataGrid, GridToolbar, } from "@mui/x-data-grid"
import { Header } from "../components/UI/Header"
import Sidebar from "../components/UI/SideBarLeft"
import { AddButton, PageText, PCard } from "../components/UI/UI"
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
    ]
    const row = Data
    return (
        <Box >
            <Header />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" height='100%' >
                <Sidebar />
                <Container style={{ marginTop: "35px",height:"50em" }} maxWidth='100%' >
                    
                    <PageText variant="h4" component="span" name="Vendor" width="5%"/>
                    <AddButton href="/addVendor" size="small" name="Add Vendor" startIcon={<AddBusiness />} />
                    
                    <PCard elevation={4}
                        content={<DataGrid
                            rows={row}
                            columns={column}
                            pageSize={10}
                            pagination
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            density="standard"
                            disableSelectionOnClick
                            sx={{ height: "100%", width: "100%", color: "#000000" }}
                        />}
                    >
                    </PCard>

                </Container>

            </Stack>

        </Box>
    )
}
export default Vendor