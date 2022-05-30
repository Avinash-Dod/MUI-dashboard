
import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogContent, DialogActions, Checkbox, FormGroup, FormControlLabel, Divider, Grid } from "@mui/material"
import { InputField, SubmitButton } from "../../../components/UI/UI";
import { Text } from "../../styles/styledComponents";

const AddGroup = (props) => {
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
                <Text name="Add Group" variant="h4" component="div" color="#30AADD" textAlign="center" fontWeight="bold" />
                {/* <IconButton onClick={handleClose} sx={{ width: "10%", float: "right", position: "relative" }}>
                    <Close />
                </IconButton> */}
            </DialogTitle>
            <form>
                <DialogContent>

                 
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
export default AddGroup
