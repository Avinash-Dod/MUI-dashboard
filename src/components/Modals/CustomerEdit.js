
import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogContent, InputLabel, DialogActions, Grid, IconButton, Select, MenuItem } from "@mui/material"
import { InputField, PageText, SubmitButton } from "../UI/UI";

const EditCustomer = (props) => {
    const handleClose = () => {
        props.close(false)
    };

    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <PageText name="Vendor Edit" variant="h6" component="span" />
                <IconButton onClick={handleClose} sx={{ width: "10%", float: "right", position: "relative" }}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <InputLabel>Properietery Name</InputLabel>
                <InputField variant="outlined" size="small" placeholder="Name" />

                <InputLabel>Properietery Type</InputLabel>
                <InputField variant="outlined" size="small" placeholder="Type" />

                <InputLabel>Email</InputLabel>
                <InputField variant="outlined" size="small" placeholder="Email" />

                <InputLabel>Mobile No.</InputLabel>
                <InputField variant="outlined" size="small" placeholder="Number" />

                <InputLabel>Address</InputLabel>
                <Select fullWidth 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={30}
    label="Age"
    
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>


                <InputLabel>Location Map</InputLabel>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.68784091838!2d75.79380948648985!3d22.72395749652709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1652685806749!5m2!1sen!2sin"
                    width="100%"
                    height="300px"
                    allowFullScreen="" loading="lazy" title="map" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </DialogContent>
            <DialogActions>
                <Grid item xs={6} textAlign="left">
                    <SubmitButton variant="contained" onClick={handleClose} size="large">Save</SubmitButton>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}
export default EditCustomer