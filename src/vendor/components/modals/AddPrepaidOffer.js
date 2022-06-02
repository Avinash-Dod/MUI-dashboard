
import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, Switch, IconButton, Box, Paper, paperClasses } from "@mui/material"
import { InputField, SubmitButton } from "../../../components/UI/UI";
import { Text } from "../../styles/styledComponents";
import { ModalCloseSx } from "../../styles/VendorSx";

const AddPrepaidOffer = (props) => {
    const handleClose = () => {
        props.close(false)
    };

    return (


        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            scroll="body" fullWidth sx={{ paper: { overflowY: 'unset' } }}
        >
            <DialogTitle id="alert-dialog-title">

                <Text name="Add Prepaid Offer" variant="h4" component="div" color="#30AADD" textAlign="center" fontWeight="bold" />

            </DialogTitle>

            <form>
                <DialogContent>

                    <InputField placeholder="Prepaid Card Offer" />
                    <InputField placeholder=" Recharge" />
                    <InputField placeholder="Get Amount" />
                    <InputField placeholder="Valid Date" />

                    <Grid container columns={2}>
                        <Grid item xs={1} >
                            <Text name="Active" variant="h6" component="div" fontWeight="bold" />
                        </Grid>
                        <Grid item xs={1} textAlign="right">
                            <Switch size="medium" />
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <IconButton onClick={handleClose} sx={ModalCloseSx}>
                        <Close />
                    </IconButton>
                    <Grid container columns={1}>
                        <Grid item xs={12} textAlign="left" padding={1}>
                            <SubmitButton variant="contained" onClick={handleClose} size="medium" sx={{ width: "40%" }} > Save </SubmitButton>
                        </Grid>
                    </Grid>
                </DialogActions>
            </form>
        </Dialog>

    )
}
export default AddPrepaidOffer
