
import { Dialog, DialogContent, Box } from "@mui/material"
import { SubmitButton } from "../../../../components/UI/UI";
import { Text } from "../../../styles/styledComponents";
import LogoutIcon from '../../../assets/logout-icon.png'
import { MenuIconSx } from "../../../styles/VendorSx";

const Logoutuser = (props) => {
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

            <DialogContent>
                <Box sx={{ textAlign: "center", padding: 5 }}>
                    <Box sx={MenuIconSx}  >
                        <img src={LogoutIcon} alt="Delete_icon" />
                    </Box>
                    <Text name="Logout" variant="h5" component="div" fontWeight="bold" color="#30AADD" mb="2%" />
                    <Text name="Are you sure want to Logout? " variant="h6" component="div" mb="4%" />
                    <SubmitButton variant="disabled" onClick={handleClose} size="medium" sx={{ width: "30%", marginRight: "3%" }} > Cancel </SubmitButton>
                    <SubmitButton variant="contained" onClick={handleClose} size="medium" sx={{ width: "30%" }} > Sure </SubmitButton>

                </Box>
            </DialogContent>

        </Dialog>
    )
}
export default Logoutuser
