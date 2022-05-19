import { Delete, ModeEdit } from "@mui/icons-material"
import { Box, IconButton, Stack, Switch, } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useState } from "react"
import { Header } from "../../components/Header"
import EditCustomer from "../../components/Modals/CustomerEdit"
import Sidebar from "../../components/SideBarLeft"
import { PageContainer, PageText, PCard } from "../../components/UI/UI"
import { CustomPagination, dataGridCellsx, datagridSx, filter } from "../../components/utility/utility"
import UserData from '../../userData.json'

const Customer = () => {
    const [open, setOpen] = useState(false);
    // const [search, setSearch] = useState('')
    const Data = Object.values(UserData)
    const row = Data
    const handleOpen = () => {
        setOpen(true)
    }

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
                    <IconButton color="primary" onClick={handleOpen}>
                        <ModeEdit sx={dataGridCellsx} />
                    </IconButton>
                    <IconButton >
                        <Delete color="primary" sx={dataGridCellsx} />
                    </IconButton >
                </>
            );
        }
    },
    ]

    return (
        <Box >
            <Header />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" height='100%' >
                <Sidebar />
                <PageContainer maxWidth='100%' >
                    <PageText variant="h4" component="span" name="Customer" width="5%" color="#30AADD" mt="35px" />
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
                                />

                            </>
                        }
                    >
                    </PCard>
                    <EditCustomer open={open} close={setOpen} />
                </PageContainer>

            </Stack>

        </Box>
    )
}
export default Customer