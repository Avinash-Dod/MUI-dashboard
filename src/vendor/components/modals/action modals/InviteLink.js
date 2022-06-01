
import { Dialog, DialogContent, Box } from "@mui/material"
import { SubmitButton } from "../../../../components/UI/UI";
import { Text } from "../../../styles/styledComponents";
import InviteIcon from '../../../assets/invite-link.png'
import { MenuIconSx } from "../../../styles/VendorSx";

const InviteLink = (props) => {
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

            <DialogContent>
                <Box sx={{ textAlign: "center", padding: 5 }}>
                    <Box sx={MenuIconSx}  >
                        <img src={InviteIcon} alt="InviteIcon" />
                    </Box>
                    <Text name="Invite Link" variant="h5" component="div" fontWeight="bold" color="#30AADD" mb="2%" />
                    <Text name="Are you sure want to Invite Link? " variant="h6" component="div" mb="4%" />
                    <SubmitButton variant="disabled" onClick={handleClose} size="medium" sx={{ width: "30%", marginRight: "3%" }} > Cancel </SubmitButton>
                    <SubmitButton variant="contained" onClick={handleClose} size="medium" sx={{ width: "30%" }} > Yes </SubmitButton>

                </Box>
            </DialogContent>

        </Dialog>
    )
}
export default InviteLink
