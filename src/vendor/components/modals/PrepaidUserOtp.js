
import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogContent, Grid, Typography, Button } from "@mui/material"
import { useState } from "react";
import { Text } from "../../styles/styledComponents";
import { AddUserOTP, PrimaryButton } from "../../styles/VendorSx";
import InviteLink from "./action modals/InviteLink";


const AddPrepaidUserOtp = (props) => {
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

            <DialogContent sx={{ padding: "25px 20% 25px 20%" }}>
                <Text name="Enter OTP" variant="body1" component="div" textAlign="left" fontWeight="bold" mb="2%" />
                <Text name="An OTP has been sent to +91xxxxxxxxxx" variant="body2" component="div" fontWeight="400" textAlign="left" mb="3%" />
                <form >
                    <Grid container columns={4}>

                        <Grid item xs={1}>
                            <input style={AddUserOTP} type="text" maxLength={1} />
                        </Grid>
                        <Grid item xs={1}>
                            <input style={AddUserOTP} type="text" maxLength={1} />
                        </Grid>
                        <Grid item xs={1}>
                            <input style={AddUserOTP} type="text" maxLength={1} />
                        </Grid>
                        <Grid item xs={1}>
                            <input style={AddUserOTP} type="text" maxLength={1} />
                        </Grid>

                    </Grid>

                </form>
                <Button variant="contained" type="submit" size="small" onClick={handleOpen} sx={PrimaryButton} >Next</Button>
                <Typography variant="p" component="p" sx={{ padding: "5%", textAlign: "center" }}   >
                    Didn't get Otp ? <b style={{ color: "#30AADD" }}>Retry Now</b>

                </Typography>

            </DialogContent>
            <InviteLink open={open} close={setOpen} />

        </Dialog>
    )
}
export default AddPrepaidUserOtp

