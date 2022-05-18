import { Add, Delete, ModeEdit } from "@mui/icons-material"
import { Stack, Box, IconButton, Switch, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, TablePagination, } from "@mui/material"
import { DataGrid, GridToolbarFilterButton, GridTool } from "@mui/x-data-grid"
import { useState } from "react"
import DataTable from "../../components/DataTable"
import { Header } from "../../components/Header"
import AddVendor from "../../components/Modals/AddVendor"
import EditVendor from "../../components/Modals/EditVendor"
import Sidebar from "../../components/SideBarLeft"
import { AddButton, PageContainer, PageText, PCard, } from "../../components/UI/UI"
import UserData from '../../userData.json'



const Vendor = () => {
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false)
    const [search, setSearch] = useState('')
    const Cells = ["S.No.", "Propietery Name ", "Propietery Type ", "Email ", "Address ", "Mobile no. ", "Status"]
    const handleOpen = () => {
        setOpen(true)
    }
    const handleEdit = () => {
        setEdit(true)
    }
    const Data = UserData
    console.log(Data);
    const column = [{ field: "id", headerName: "S.NO.", width: 80 },
    { field: "Name", headerName: "Propietery Name ", width: 170 },
    { field: "type", headerName: "Propietery Type ", width: 170 },
    { field: "email", headerName: "Email ", width: 180 },
    { field: "location", headerName: "Address ", width: 180 },
    { field: "phone", headerName: "Mobile no. ", width: 120 },

    {
        field: "Status",
        renderCell: (StatusValue) => {
            return (
                <Switch defaultChecked onClick={() => window.confirm("Want to Disable?")} />
            )
        }
    },

    {
        field: "Action",
        renderCell: (cellValues) => {
            return (
                <>

                </>
            );
        }
    },
    ]
    const row = Data
    return (
        <Box >
            <Header />
            <Stack direction="row" spacing={1} justifyContent="space-between" flexDirection="row" >
                <Sidebar />
                <PageContainer maxWidth='85%' fixed>
                    <PageText variant="h4" component="span" name="Vendor" width="5%" color="#30AADD" mt="35px" />
                    {/* <Button variant="contained" size="small" name="Add New" startIcon={<Add />}  >Add New</Button> */}
                    <AddButton variant="contained" size="small" name="Add New" onClick={handleOpen} startIcon={<Add />} />
                    <PCard elevation={4} width="95%" margin="9% 0px 0px 0px"
                        content={
                            <DataTable />

                        }
                    >
                    </PCard>
                    <AddVendor open={open} close={setOpen} />
                    <EditVendor edit={edit} closeEdit={setEdit} />


                </PageContainer>

            </Stack>

        </Box>
    )
}
export default Vendor