import { Add } from "@mui/icons-material"
import { Box, Container, Stack, } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { Header } from "../components/Header"
import Sidebar from "../components/SideBarLeft"

import { AddButton, PageContainer, PageText, PCard } from "../components/UI/UI"
import UserData from '../userData.json'

const Customer = () => {
    const Data = Object.values(UserData)
    const column = [{ field: "id", headerName: "ID", width: 90 },
    { field: "Name", headerName: "Fullname ", width: 200 },
    { field: "email", headerName: "Email ", width: 200, },

    {
        field: "phone",
        headerName: "Phone",
        type: "number",
        width: 200,
        headerAlign: "center", align: "center"
    },
    ]
    const row = Data


    return (
        <Box >
        <Header />
        <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" height='100%' >
            <Sidebar />
            <PageContainer style={{ height:"50em" }} maxWidth='100%' >
                
                <PageText variant="h4" component="span" name="Customer" width="5%" color="#30AADD" mt="35px" />
                
                
                <PCard elevation={4} width="95%" margin="10% 0px 0px 0px" height="60%"
                    content={<DataGrid
                        rows={row}
                       
                        
                        columns={column}
                        pageSize={10}
                        pagination
                       filterMode="server"
                    
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        density="standard"
                        disableSelectionOnClick
                        sx={{ height: "100%", width: "100%", color: "#000000" }}
                    />}
                >
                </PCard>

            </PageContainer>

        </Stack>

    </Box>
    )
}
export default Customer