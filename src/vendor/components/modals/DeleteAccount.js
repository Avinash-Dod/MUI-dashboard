

import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, Avatar, Box } from "@mui/material"
import { SubmitButton } from "../../../components/UI/UI";
import { Text } from "../../styles/styledComponents";
import AccountIcon from '../../assets/delete-account.png'
import { MenuIconSx } from "../../styles/VendorSx";

const DeleteAccount = (props) => {
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

           
            <DialogContent>
                <Box sx={{ textAlign: "center",padding:5 }}>
                <Box   sx={MenuIconSx}  >
                    <Avatar src={AccountIcon} alt="deleteAccount" />
                </Box>

                <Text name="Delete Account" variant="h5" component="div" fontWeight="bold" color="#30AADD" mb="2%" />
                <Text name="Are you sure want to Delete Account? " variant="p" component="div" />
 

                </Box>
            </DialogContent>
            <DialogActions>
                <Grid container columns={2} spacing={2} width="100%" textAlign="center">
                    <Grid item xs={1} textAlign="right">
                        <SubmitButton variant="disabled" onClick={handleClose} size="medium" sx={{ width: "40%" }} > Cancel </SubmitButton>
                      
                    </Grid>
                    <Grid item xs={1} textAlign="left" >
                       
                        <SubmitButton variant="contained" onClick={handleClose} size="medium" sx={{ width: "40%" }} > Save </SubmitButton>
                    </Grid>
                </Grid>
            </DialogActions>

        </Dialog>
    )
}
export default DeleteAccount
