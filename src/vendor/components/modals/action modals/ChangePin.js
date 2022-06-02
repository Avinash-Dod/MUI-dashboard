
import { Dialog, DialogContent, Box, Grid, DialogTitle } from "@mui/material"
import { SubmitButton } from "../../../../components/UI/UI";
import { Text } from "../../../styles/styledComponents";
import { AddUserOTP } from "../../../styles/VendorSx";

const ChangePin = (props) => {
    const handleClose = () => {
        props.close(false)
    };

    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            scroll="body" fullWidth      >

            <DialogTitle id="alert-dialog-title">
                <Text name="Change Pin" variant="h4" component="div" color="#30AADD" textAlign="center" fontWeight="bold" />
                {/* <IconButton onClick={handleClose} sx={{ width: "10%", float: "right", position: "relative" }}>
                    <Close />
                </IconButton> */}
            </DialogTitle>


            <DialogContent>
                <Box sx={{ textAlign: "center", padding: 5 }}>
                    <Text name="Enter Your Old Pin" variant="body1" component="div" fontWeight="bold" textAlign="left" mb="3%" />
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
                        <Text name="Enter Your New Pin" variant="body1" component="div" fontWeight="bold" textAlign="left" mb="3%" mt="2%" />
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

                        <Text name="Enter Your Confirm Pin" variant="body1" component="div" fontWeight="bold" textAlign="left" mb="3%" mt="2%" />
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

                    <SubmitButton variant="contained" onClick={handleClose} size="medium" sx={{ width: "50%", mt: "4%" }} > Save </SubmitButton>

                </Box>
            </DialogContent>

        </Dialog>
    )
}
export default ChangePin
