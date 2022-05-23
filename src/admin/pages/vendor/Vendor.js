import { Add, Delete, ModeEdit } from "@mui/icons-material"
import { Stack, Box, IconButton, Switch, } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useState } from "react"
import { AddButton, PageContainer, PageText, PCard } from "../../../components/UI/UI"
import { CustomPagination, dataGridCellsx, datagridSx, filter } from "../../../components/utility/utility"

import UserData from '../../../userData.json'
import { Header } from "../../components/AdminHeader"
import AddVendor from "../../components/modals/AddVendor"
import EditVendor from "../../components/modals/EditVendor"
import Sidebar from "../../components/sidebar/AdminSidebar"

const Vendor = () => {
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false)
    // const [search, setSearch] = useState('')   
    const handleOpen = () => {
        setOpen(true)
    }
    const handleEdit = () => {
        setEdit(true)
    }
    const Data = UserData

    const column = [{ field: "id", headerName: "S.NO.", width: 80 },
    { field: "Name", headerName: "Propietery Name ", width: 170 },
    { field: "type", headerName: "Propietery Type ", width: 170 },
    { field: "email", headerName: "Email ", width: 180 },
    { field: "location", headerName: "Address ", width: 180 },
    { field: "phone", headerName: "Mobile no. ", width: 150 },
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
                    <IconButton >
                        <Delete color="primary" sx={dataGridCellsx} />
                    </IconButton >
                    <IconButton color="primary" onClick={handleEdit}>
                        <ModeEdit sx={dataGridCellsx} />
                    </IconButton>

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
                    <AddButton variant="contained" size="small" name="Add New" onClick={handleOpen} startIcon={<Add />} />
                    <PCard elevation={3} width="95%" margin="9% 0px 0px 0px" height="60%"
                        content={

                            <>
                                <DataGrid
                                    rows={row}
                                    disableColumnSelector
                                    disableColumnMenu
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                    columns={column}
                                    components={{
                                        Toolbar: filter,
                                        Pagination: CustomPagination
                                    }}
                                    disableSelectionOnClick
                                    density="standard"
                                    sx={datagridSx}
                                    paginationMode="client"
                                />
                            </>

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