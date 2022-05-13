import { Add } from "@mui/icons-material"
import { Container, Stack, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, InputLabel, Grid, } from "@mui/material"

import { DataGrid, } from "@mui/x-data-grid"
import { useState } from "react"
import { Header } from "../components/Header"
import Sidebar from "../components/SideBarLeft"
import { AddButton, InputField, PageText, PCard, SubmitButton } from "../components/UI/UI"
import UserData from '../userData.json'

const Vendor = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                <Container style={{ height: "50em" }} maxWidth='100%' >

                    <PageText variant="h4" component="span" name="Vendor" width="5%" color="#30AADD" mt="35px" />
                    <Button variant="contained" onClick={handleClickOpen} size="small" name="Add New" startIcon={<Add />}  >Add New</Button>

                    <PCard elevation={4} width="95%" margin="10% 0px 0px 0px" height="60%"
                        content={
                            <>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Use Google's location service?"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} >
                                                <InputLabel>Name</InputLabel>
                                                <InputField variant="outlined" size="small" placeholder="Name" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <InputLabel>Email</InputLabel>
                                                <InputField variant="outlined" size="small" placeholder="Email" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <InputLabel>Mobile No.</InputLabel>
                                                <InputField variant="outlined" size="small" placeholder="Number" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <InputLabel>Date of Birth</InputLabel>
                                                <InputField variant="outlined" size="small" type="date" />

                                            </Grid>


                                        </Grid>
                                    </DialogContent>
                                    <DialogActions>
                                        <Grid item xs={6} textAlign="left">
                                            <SubmitButton variant="contained" onClick={handleClose} size="large">Save</SubmitButton>
                                        </Grid>
                                    </DialogActions>
                                </Dialog>


                                <DataGrid
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
                                />

                            </>
                        }
                    >
                    </PCard>

                </Container>

            </Stack>

        </Box>
    )
}
export default Vendor