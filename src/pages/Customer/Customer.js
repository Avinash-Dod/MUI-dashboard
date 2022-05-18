import { Delete, ModeEdit, Search } from "@mui/icons-material"
import { Box, Button, IconButton, Input, List, ListItem, Stack, Switch, Typography, } from "@mui/material"
import { DataGrid, GridColumnHeaderItem, GridFilterAltIcon, GridFilterPanel, GridHeaderPlaceholder, GridPagination, GridSearchIcon, GridToolbarColumnsButton, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid"
import { useState } from "react"
import { Header } from "../../components/Header"
import EditCustomer from "../../components/Modals/CustomerEdit"
import Sidebar from "../../components/SideBarLeft"
import { InputField, PageContainer, PageText, PCard } from "../../components/UI/UI"
import UserData from '../../userData.json'

const Customer = () => {

    const [open, setOpen] = useState(false);
    // const [search, setSearch] = useState('')

    const Data = Object.values(UserData)
    const row = Data
    const handleOpen = () => {
        setOpen(true)
    }
    // const SearchHandler = (e) => {
    //     e.preventDefault()
    //     setSearch(e.target.value)

    // }
    // console.log(search);
    const filter = () => {
        return (
            <Box sx={{ float: "left" }} >
                <GridToolbarFilterButton />
                <GridToolbarExport />

                <GridToolbarColumnsButton />

                

                <Input type="text" placeholder="search Here" />



                {/* 
                    {row.filter((post) => {
                        if (search === '') {
                            return post;
                        } else if ((post.Name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) || (post.phone.toLocaleLowerCase().includes(search.toLocaleLowerCase())) || (post.email.toLocaleLowerCase().includes(search.toLocaleLowerCase()))) {
                            return post;
                        }
                    }).map((exp, index) => (
                        <div className="col-lg-3 " key={index}>
                            <h5>{exp.Name}</h5>


                        </div>


                    ))} */}








            </Box>
        )
    }

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
                    <IconButton color="primary" onClick={handleOpen}>
                        <ModeEdit sx={{ border: "#30AADD 1px solid", }} />
                    </IconButton>
                    <IconButton >
                        <Delete color="primary" sx={{ border: "#30AADD 1px solid" }} />
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


                    <PCard elevation={4} width="95%" margin="10% 0px 0px 0px" height="70%"
                        content={
                            <DataGrid
                                rows={row}
                                disableColumnSelector
                                disableColumnMenu
                                columns={column}
                                // pagination
                                components={{ Toolbar: filter }}
                                // rowsPerPageOptions={[5, 25, 50]}
                                disableSelectionOnClick
                                checkboxSelection
                                density="standard"

                                sx={{ height: "32em", maxHeight: "80%", width: "100%", color: "#000000" }}


                            />
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