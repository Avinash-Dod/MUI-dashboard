
import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogContent, Grid } from "@mui/material"
import { useState } from "react";
import { InputField, SubmitButton } from "../../../components/UI/UI";
import { Text } from "../../styles/styledComponents";
import AddPrepaidUserOtp from "./PrepaidUserOtp";


const AddPrepaidUser = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        
    }

    const handleClose = () => {
        props.close(false)
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
                    <Text name="Enter Your Mobile Number" variant="body1" component="div" textAlign="left" fontWeight="bold" mb="1%" />
                    <Text name="We will sent you confirmation number" variant="p" component="div" textAlign="left" />
                    <InputField placeholder="9876543210" />
                    <Grid container columns={1}>
                        <Grid item xs={12} textAlign="left" padding={1}>
                            <SubmitButton variant="contained" onClick={handleOpen} size="medium" sx={{ width: "45%" }} > Next </SubmitButton>
                        </Grid>
                    </Grid>

                </DialogContent>

            </form>
            <AddPrepaidUserOtp open={open} close={setOpen} />
        </Dialog>
        
    )
}
export default AddPrepaidUser

