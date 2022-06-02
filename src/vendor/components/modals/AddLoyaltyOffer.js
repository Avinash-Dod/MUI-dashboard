
import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, Switch } from "@mui/material"
import { InputField, SubmitButton } from "../../../components/UI/UI";
import { Text } from "../../styles/styledComponents";

const AddLoyaltyOffer = (props) => {
    const handleClose = () => {
        props.close(false)
    };

    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            scroll="body" fullWidth
        >

            <DialogTitle id="alert-dialog-title">
                <Text name="Add Loyalty Offer" variant="h4" component="div" color="#30AADD" textAlign="center" fontWeight="bold" />
                {/* <IconButton onClick={handleClose} sx={{ width: "10%", float: "right", position: "relative" }}>
                    <Close />
                </IconButton> */}
            </DialogTitle>

            <form>
                <DialogContent>

                    <InputField placeholder="Loyalty Card Offer" />
                    <InputField placeholder="Amount" />
                    <InputField placeholder="Get Reward Point" />
                    <InputField placeholder="Multiple By" />
                    <InputField placeholder="Valid Date" />

                    <Grid container columns={2}>
                        <Grid item xs={1} >
                            <Text name="Active" variant="h6" component="div" fontWeight="bold" />
                        </Grid>
                        <Grid item xs={1} textAlign="right" >
                            <Switch size="medium" />
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
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
export default AddLoyaltyOffer

