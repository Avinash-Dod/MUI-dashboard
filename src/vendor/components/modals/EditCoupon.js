

import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, Switch } from "@mui/material"
import { InputField, SubmitButton } from "../../../components/UI/UI";
import { Text } from "../../styles/styledComponents";

const EditCoupon = (props) => {
    const handleClose = () => {
        props.close(false)
    };
    
    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            scroll="body" fullWidth  >

            <DialogTitle id="alert-dialog-title">
                <Text name="Edit Coupons" variant="h4" component="div" color="#30AADD" textAlign="center" fontWeight="bold" />
                {/* <IconButton onClick={handleClose} sx={{ width: "10%", float: "right", position: "relative" }}>
                    <Close />
                </IconButton> */}
            </DialogTitle>

            <form>
                <DialogContent>

                    <InputField placeholder="Coupon Name" />
                    <InputField placeholder="Shopping Amount" />
                    <InputField placeholder="Discount Amount" />
                    <InputField placeholder="User Max Apply Coupon" />
                    <InputField placeholder="Valid Date" />
                    <InputField placeholder="T&c" multiline rows={4} />

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
                        <Grid item xs={12} textAlign="left" padding={1} >
                            <SubmitButton variant="contained" onClick={handleClose} size="medium" sx={{ width: "40%" }} > Save </SubmitButton>
                        </Grid>
                    </Grid>
                </DialogActions>

            </form>
        </Dialog>

    )
}
export default EditCoupon
