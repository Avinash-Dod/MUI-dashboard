import {  PersonPinCircle } from "@mui/icons-material"
import { Badge, Box, Button, Grid,IconButton,InputLabel, Stack,} from "@mui/material"

import { Header } from "../components/Header"
import Sidebar from "../components/SideBarLeft"
import { InputField, PageContainer, PageText, PCard, Pencil, ProfilePic, SubmitButton, } from "../components/UI/UI"

const Profile = () => {

    return (
        <Box >
            <Header />
            <Stack direction="row" justifyContent="start" flexDirection="row" height='100%' >
                <Sidebar />
                <PageContainer style={{ height: "50em" }} maxWidth="100%"  >
                    <PageText variant="h4" component="span" name="Profile" width="5%" color="#30AADD" mt="35px" />
                    <PCard elevation={4} width="50%" textAlign="center" margin="10% auto" padding="50px" height="auto"

                        content={
                            <Box>
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
                                            <Pencil fontSize="small"  />
                                            </IconButton>
                                        </label>
                                        </>                       
                                            
                                        }
                                        
                                    
                                    >
                                        <ProfilePic src={<PersonPinCircle />} />
                                    </Badge>
                                </Box>
<form >
                                <Grid container spacing={2}>
                                    <Grid item xs={6} >
                                        <InputLabel>Name</InputLabel>
                                        <InputField variant="outlined" size="small" placeholder="Name" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <InputLabel>Email</InputLabel>
                                        <InputField variant="outlined" size="small" placeholder="Email" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <InputLabel>Mobile No.</InputLabel>
                                        <InputField variant="outlined" size="small" placeholder="Number" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <InputLabel>Date of Birth</InputLabel>
                                        <InputField variant="outlined" size="small" type="date" />
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

            </Stack>

        </Box>

    )
}
export default Profile