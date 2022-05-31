
import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid } from "@mui/material"
import { InputField, SubmitButton } from "../../../components/UI/UI";
import { AccountFields, Text } from "../../styles/styledComponents";

const EditBranch = (props) => {
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
                <Text name="Edit Branch" variant="h4" component="div" color="#30AADD" textAlign="center" fontWeight="bold" />
                {/* <IconButton onClick={handleClose} sx={{ width: "10%", float: "right", position: "relative" }}>
                    <Close />
                </IconButton> */}
            </DialogTitle>
            <form>
                <DialogContent>

                    <AccountFields placeholder="Featured Image" />
                    <InputField placeholder="Properietry Name" />
                    <InputField placeholder="Properietry Type" />
                    <InputField placeholder="Email" />
                    <InputField placeholder="Mobile Number" />
                    <InputField placeholder="Enter Your Address" />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.68784091838!2d75.79380948648985!3d22.72395749652709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1653296575742!5m2!1sen!2sin"
                        width="550" height="300"
                        style={{ border: 0, zIndex: 3 }} allowFullScreen=""
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="vendor address"></iframe>

                </DialogContent>
                <DialogActions>
                    <Grid container columns={1}>
                        <Grid item xs={12} textAlign="left" padding={1} >
                            <SubmitButton variant="contained" onClick={handleClose} size="medium" sx={{ width: "40%" }} > Save </SubmitButton>
                        </Grid>
                    </Grid>
                </DialogActions>
            </form>
        </Dialog>

    )
}
export default EditBranch
