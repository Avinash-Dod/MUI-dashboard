import { Delete, ModeEdit } from "@mui/icons-material"
import { Box, IconButton, Stack, Switch, } from "@mui/material"
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid"
import { useState } from "react"
import { Header } from "../components/Header"
import EditCustomer from "../components/Modals/CustomerEdit"
import Sidebar from "../components/SideBarLeft"
import { PageContainer, PageText, PCard } from "../components/UI/UI"
import UserData from '../userData.json'

const Customer = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const Data = Object.values(UserData)
    const column = [{ field: "id", headerName: "S.NO.", width: 80 },
    { field: "Name", headerName: "Propietery Name ", width:170},
    { field: "type", headerName: "Propietery Type ", width:170},
    { field: "email", headerName: "Email ", width:180},
    { field: "location", headerName: "Address ", width:180},
    { field: "phone", headerName: "Mobile no. ", width:120},
    
      {
        field: "Status",
        renderCell: (StatusValue) => {
            return(
                <Switch defaultChecked onD={()=>window.confirm("Want to Disable?")}/>            
                )
        }         
        },
          
    {
        field: "Action",
        renderCell: (cellValues) => {
          return (
              <>
            <IconButton color="primary"   onClick={handleOpen}>
                <ModeEdit sx={{border:"#30AADD 1px solid",}} />
            </IconButton>
            <IconButton >
            <Delete color="primary" sx={{border:"#30AADD 1px solid"}}/>
        </IconButton >
        </>
          );
        }
      },
    ]
    const row = Data


    return (
        <Box >
            <Header />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" height='100%' >
                <Sidebar />
                <PageContainer style={{ height: "50em" }} maxWidth='100%' >

                    <PageText variant="h4" component="span" name="Customer" width="5%" color="#30AADD" mt="35px" />


                    <PCard elevation={4} width="95%" margin="10% 0px 0px 0px" height="60%"
                        content={<DataGrid
                            rows={row}
                            columns={column}
                            pageSize={10}
                            pagination
                            components={{ Toolbar: GridToolbarFilterButton }}
                            rowsPerPageOptions={[5, 10, 25]}
                            disableSelectionOnClick
                            checkboxSelection
                            density="standard"

                            sx={{ height: "100%", width: "100%", color: "#000000" }}
                        />}
                    >
                    </PCard>
                    <EditCustomer open={open} close={setOpen} />

                </PageContainer>

            </Stack>

        </Box>
    )
}
export default Customer