
import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, Switch, MenuItem } from "@mui/material"
import { useState } from "react";
import { InputField, SubmitButton } from "../../../components/UI/UI";
import { Text } from "../../styles/styledComponents";

const Type = ["Group Type", "Type1", "Type2", "Type3", "Type4"];

const AddUser = (props) => {
    const [gType, setGtype] = useState('Group Type')

    const handleClose = () => {
        props.close(false)
    };
    const handleChange = (event) => {
        setGtype(event.target.value);
    };

    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            scroll="body" fullWidth   >

            <DialogTitle id="alert-dialog-title">
                <Text name="Add User" variant="h4" component="div" color="#30AADD" textAlign="center" fontWeight="bold" />
                {/* <IconButton onClick={handleClose} sx={{ width: "10%", float: "right", position: "relative" }}>
                    <Close />
                </IconButton> */}
            </DialogTitle>

            <form>
                <DialogContent>

                    <InputField placeholder="Enter Your Name" />
                    <InputField select value={gType} onChange={handleChange} placeholder="Group Type" >
                        {Type.map((option) => (
                            <MenuItem key={Object.keys(option)} value={option}>
                                {option}
                            </MenuItem>
                        ))}

                    </InputField>
                    <InputField placeholder="Branch" />
                    <InputField placeholder="Email" />
                    <InputField placeholder="Mobile Number" />
                    <Grid container columns={2}>
                        <Grid item xs={1} >
                            <Text name="Active" variant="p" component="div" fontWeight="bold" />
                        </Grid>
                        <Grid item xs={1} >
                            <Switch size="medium" />
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Grid container columns={1}>
                        <Grid item xs={12} textAlign="left">
                            <SubmitButton variant="contained" onClick={handleClose} size="medium" sx={{ width: "40%" }} > Save </SubmitButton>
                        </Grid>
                    </Grid>
                </DialogActions>
            </form>
        </Dialog>
    )
}
export default AddUser

