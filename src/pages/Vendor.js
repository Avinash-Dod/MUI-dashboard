import { Add, Delete,ModeEdit } from "@mui/icons-material"
import { Container, Stack, Box,IconButton, Switch,  } from "@mui/material"
import { DataGrid,    GridToolbarFilterButton,  } from "@mui/x-data-grid"
import { useState } from "react"
import AddVendor from "../components/Modals/AddVendor"
import { Header } from "../components/Header"
import Sidebar from "../components/SideBarLeft"
import { AddButton,  PageText, PCard, } from "../components/UI/UI"
import UserData from '../userData.json'
import EditVendor from "../components/Modals/EditVendor"


const Vendor = () => {
    const [open, setOpen] = useState(false);
    const[edit,setEdit]=useState(false)
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleEdit=()=>{
        setEdit(true)
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
                <Switch defaultChecked onClick={()=>window.confirm("Want to Disable?")}/>            
                )
        }         
        },

    {
        field: "Action",
        renderCell: (cellValues) => {
          return (
              <>
            <IconButton color="primary"   onClick={handleEdit}>
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
                <Container style={{ height: "50em" }} maxWidth='100%' >

                    <PageText variant="h4" component="span" name="Vendor" width="5%" color="#30AADD" mt="35px" />
                    {/* <Button variant="contained" size="small" name="Add New" startIcon={<Add />}  >Add New</Button> */}
                    <AddButton variant="contained" size="small" name="Add New" onClick={handleOpen} startIcon={<Add />} />
                    <PCard elevation={4} width="95%" margin="10% 0px 0px 0px" height="60%"
                        content={
                            <>    <DataGrid
                                rows={row}
                                columns={column}
                                pageSize={10}
                                pagination
                                components={{Toolbar:GridToolbarFilterButton}}
                                rowsPerPageOptions={[5,10,25]}
                                disableSelectionOnClick
                                checkboxSelection
                                density="standard"
                                
                                sx={{ height: "100%", width: "100%", color: "#000000" }}
                            />

                            </>
                        }
                    >
                    </PCard>
                    <AddVendor open={open} close={setOpen} />
                    <EditVendor edit={edit} closeEdit={setEdit} />
 

                </Container>

            </Stack>

        </Box>
    )
}
export default Vendor