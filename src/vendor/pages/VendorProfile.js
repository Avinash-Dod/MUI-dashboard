
import { Avatar, Badge, Box, Button, Grid, IconButton, InputAdornment, InputLabel, Stack, } from "@mui/material"
import { InputField, PageContainer, PageText, PCard, Pencil, ProfilePic, SubmitButton } from "../../components/UI/UI"
import { VendorHeader } from "../components/VendorHeader"
import VendorSidebar from "../Sidebar/VendorSidebar"
import PanCard from '../../assets/pan-card.png'
import AadharCard from '../../assets/aadhar.png'

const VendorProfile = () => {
    return (
        <Box >
            <VendorHeader />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" height='100%' >
                <VendorSidebar />
                <PageContainer maxWidth='100%' >
                    <PCard elevation={4} width="50%" textAlign="center" margin="2% auto" padding="40px" height="auto"
                        content={
                            <Box>
                                <PageText variant="h4" component="div" name="Profile" width="100%" color="#30AADD" mb="30px" />
                                <Box sx={{ marginBottom: 5 }}>
                                    <Badge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        badgeContent={
                                            <>
                                                <input
                                                    accept="image/*"
                                                    id="icon-button-photo"
                                                    type="file"
                                                    hidden
                                                />
                                                <label htmlFor="icon-button-photo">
                                                    <IconButton color="primary" component="span">
                                                        <Pencil fontSize="small" />
                                                    </IconButton>
                                                </label>
                                            </>

                                        }
                                    >
                                        <ProfilePic />
                                    </Badge>
                                </Box>
                                <form >
                                    <Grid container spacing={2} >
                                        <Grid item xs={6} >
                                            <InputLabel>Full Name</InputLabel>
                                            <InputField variant="outlined" size="small" placeholder="Name" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputLabel>Mobile No.</InputLabel>
                                            <InputField variant="outlined" size="small" placeholder="Number" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <InputLabel>Featured Image</InputLabel>
                                            <InputField variant="outlined"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Avatar src={AadharCard} />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end" >

                                                            <input
                                                                accept="image/*"
                                                                id="featured-Image"
                                                                type="file"
                                                                hidden
                                                            />
                                                            <Button variant="outlined" sx={{ marginTop: "0%" }} size="small" >
                                                                <label htmlFor="featured-Image">
                                                                    Choose File
                                                                </label>
                                                            </Button>

                                                        </InputAdornment>
                                                    )
                                                }}
                                                size="medium" disabled placeholder="You can drag or drop Png" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputLabel>Propereitry Name</InputLabel>
                                            <InputField variant="outlined" size="small" placeholder="Propereitry Name" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputLabel>Propereitry Type</InputLabel>
                                            <InputField variant="outlined" size="small" placeholder="Propereitry Type" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputLabel>Email</InputLabel>
                                            <InputField variant="outlined" size="small" placeholder="Email" />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <InputLabel>Website Link</InputLabel>
                                            <InputField variant="outlined" size="small" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputLabel>Pan Card</InputLabel>
                                            <InputField variant="outlined" disabled
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Avatar src={PanCard} />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end" >
                                                            <input
                                                                accept="image/*"
                                                                id="icon-aadhar-card"
                                                                type="file"
                                                                hidden
                                                            />
                                                            <Button variant="outlined" htmlFor="icon-aadhar-card"
                                                                size="medium" >
                                                                <label >
                                                                    Choose File
                                                                </label>
                                                            </Button>

                                                        </InputAdornment>
                                                    )
                                                }}

                                                size="medium" placeholder="You can drag or drop Png" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputLabel>Aadhar Card</InputLabel>
                                            <InputField variant="outlined" size="medium" disabled
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Avatar src={AadharCard} />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end" >

                                                            <input
                                                                accept="image/*"
                                                                id="icon-pan-card"
                                                                type="file"
                                                                hidden
                                                            />

                                                            <Button variant="outlined"
                                                                size="medium" >
                                                                <label htmlFor="icon-pan-card">
                                                                    Choose File
                                                                </label>
                                                            </Button>

                                                        </InputAdornment>
                                                    )
                                                }}
                                                placeholder="You can drag or drop Png" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <InputLabel>Address</InputLabel>
                                            <InputField variant="outlined" size="small" placeholder="Address" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.68784091838!2d75.79380948648985!3d22.72395749652709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1653296575742!5m2!1sen!2sin"
                                                width="600" height="300"
                                                style={{ border: 0, zIndex: 3 }} allowFullScreen=""
                                                loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="vendor address"></iframe>
                                        </Grid>
                                        <Grid item xs={6} textAlign="left">
                                            <SubmitButton variant="contained" type="submit" size="large">Save</SubmitButton>
                                        </Grid>

                                    </Grid>
                                </form>
                            </Box>
                        }
                    >
                    </PCard>
                </PageContainer>
            </Stack >

        </Box >

    )
}
export default VendorProfile