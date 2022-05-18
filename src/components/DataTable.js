import { Delete, ModeEdit } from "@mui/icons-material";
import { IconButton, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import { useState } from "react";
import UserData from '../userData.json'



const DataTable = () => {
    const [open, setOpen] = useState(false);
const [edit, setEdit] = useState(false)
const Cells = ["S.No.", "Propietery Name ", "Propietery Type ", "Email ", "Address ", "Mobile no. ", "Status"]
const handleOpen = () => {
    setOpen(true)
}
const handleEdit = () => {
    setEdit(true)
}
const Data = UserData
console.log(Data);
    return (
        <>
            <TableContainer >
                <Table size="small">
                    <TableHead color="#fafafa" sx={{ textAlign: "center" }}>
                        <TableRow>
                            {Cells.map(cell => (
                                <TableCell>
                                    {cell}
                                </TableCell>
                            ))}
                            <TableCell colSpan={2}> Action </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.values(Data).map(cell => (
                            <TableRow>
                                <>
                                    {console.log("cell", cell)}
                                    <TableCell>
                                        0{cell.id}
                                    </TableCell>
                                    <TableCell>
                                        {cell.Name}
                                    </TableCell>
                                    <TableCell>
                                        {cell.type}
                                    </TableCell>
                                    <TableCell>
                                        {cell.email}
                                    </TableCell>
                                    <TableCell>
                                        {cell.location}
                                    </TableCell>
                                    <TableCell>
                                        {cell.phone}
                                    </TableCell>
                                    <TableCell>
                                        <Switch defaultChecked onChange={() => {
                                            window.confirm("Are you want to disable?")
                                        }} />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton color="primary" onClick={handleEdit}>
                                            <ModeEdit sx={{ border: "#30AADD 1px solid", }} />
                                        </IconButton>
                                        <IconButton >
                                            <Delete color="primary" sx={{ border: "#30AADD 1px solid" }} />
                                        </IconButton >
                                    </TableCell>
                                </>
                            </TableRow>)
                        )}
                    </TableBody>


                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                page={5}

            />
        </>
    )
}
export default DataTable