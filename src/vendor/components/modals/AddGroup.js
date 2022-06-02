
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

                    <InputField placeholder="Enter Your Title" />
                    <Text name="Profile Management" textAlign="left" component="span" variant="p" fontWeight="bold" mt="4%" />

                    <FormGroup aria-label="position" row>
                        <FormControlLabel value="Edit" control={<Checkbox />} label="Edit" labelPlacement="end" />
                        <FormControlLabel value="View" control={<Checkbox />} label="View" labelPlacement="end" />
                    </FormGroup>
                    <Divider />
                    <Text name="Account Management" textAlign="left" component="span" variant="p" fontWeight="bold" mt="4%" />

                    <FormGroup aria-label="position" row>
                        <FormControlLabel value="Edit" control={<Checkbox />} label="Edit" labelPlacement="end" />
                        <FormControlLabel value="View" control={<Checkbox />} label="View" labelPlacement="end" />
                    </FormGroup>
                    <Divider />
                    <Text name="Group Management" textAlign="left" component="span" variant="p" fontWeight="bold" mt="4%" />

                    <FormGroup aria-label="position" row>
                        <FormControlLabel value="Create" control={<Checkbox />} label="Create" labelPlacement="end" />
                        <FormControlLabel value="Edit" control={<Checkbox />} label="Edit" labelPlacement="end" />
                        <FormControlLabel value="View" control={<Checkbox />} label="View" labelPlacement="end" />
                    </FormGroup>
                    <Divider />
                    <Text name="User Management" textAlign="left" component="span" variant="p" fontWeight="bold" mt="4%" />

                    <FormGroup aria-label="position" row>
                        <FormControlLabel value="Create" control={<Checkbox />} label="Create" labelPlacement="end" />
                        <FormControlLabel value="Edit" control={<Checkbox />} label="Edit" labelPlacement="end" />
                        <FormControlLabel value="View" control={<Checkbox />} label="View" labelPlacement="end" />
                    </FormGroup>
                    <Divider />
                    <Text name="Offer Management" textAlign="left" component="span" variant="p" fontWeight="bold" mt="4%" />

                    <FormGroup aria-label="position" row>
                        <FormControlLabel value="Create" control={<Checkbox />} label="Create" labelPlacement="end" />
                        <FormControlLabel value="Edit" control={<Checkbox />} label="Edit" labelPlacement="end" />
                        <FormControlLabel value="View" control={<Checkbox />} label="View" labelPlacement="end" />
                    </FormGroup>
                    <Divider />

                    <Text name="Coupon Management" textAlign="left" component="span" variant="p" fontWeight="bold" mt="4%" />

                    <FormGroup aria-label="position" row>
                        <FormControlLabel value="Create" control={<Checkbox />} label="Create" labelPlacement="end" />
                        <FormControlLabel value="Edit" control={<Checkbox />} label="Edit" labelPlacement="end" />
                        <FormControlLabel value="View" control={<Checkbox />} label="View" labelPlacement="end" />
                    </FormGroup>
                    <Divider />
                    <Text name="Prepaid Card Management" textAlign="left" component="span" variant="p" fontWeight="bold" mt="4%" />

                    <FormGroup aria-label="position" row>
                        <FormControlLabel value="Create" control={<Checkbox />} label="Create" labelPlacement="end" />
                        <FormControlLabel value="Edit" control={<Checkbox />} label="Edit" labelPlacement="end" />
                        <FormControlLabel value="View" control={<Checkbox />} label="View" labelPlacement="end" />
                    </FormGroup>
                    <Divider />
                    <Text name="Loyalty Point Management" textAlign="left" component="span" variant="p" fontWeight="bold" mt="4%" />

                    <FormGroup aria-label="position" row>
                        <FormControlLabel value="Create" control={<Checkbox />} label="Create" labelPlacement="end" />
                        <FormControlLabel value="Edit" control={<Checkbox />} label="Edit" labelPlacement="end" />
                        <FormControlLabel value="View" control={<Checkbox />} label="View" labelPlacement="end" />
                    </FormGroup>
                    <Divider />

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
export default AddGroup
