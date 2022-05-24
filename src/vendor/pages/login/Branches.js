import { ArrowForwardIos } from "@mui/icons-material"
import { Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack } from "@mui/material"
import { PageText } from "../../../components/UI/UI"
import locationIcon from '../../assets/map-icon.png'

import { BranchList, LoginContainer, MainBox, MainContainer, Text, } from "../../styles/styledComponents"


const Branches = () => {
    const location = [
        {
            src: locationIcon,
            BranchName: "Apna Sweets",
            address: "VijayNagar Branch"
        },
        {
            src: locationIcon,
            BranchName: "Apna Sweets",
            address: "Old Palasia Square Branch"
        },
        {
            src: locationIcon,
            BranchName: "Apna Sweets",
            address: "Gita Bhawan Square Branch"
        },
        {
            src: locationIcon,
            BranchName: "Apna Sweets",
            address: "SC No. 420 Bypass near nipania branch indore"
        },
        {
            src: locationIcon,
            BranchName: "Apna Sweets",
            address: "Bhawarkua Palasia Square Branch"
        },


    ]
    return (
        <Box >
            <Stack direction="row" flexDirection="row" justifyContent="start" >
                <LoginContainer />
                <MainContainer sx={{
                    width: { xs: '100%', md: '100%', lg: '50%', xl: '50%' },
                    marginLeft: { xs: '0%', md: '0%', lg: '50%', xl: '50%' }
                }}  >

                    <MainBox justifyContent="center"   >

                        <PageText name="Branches" variant="h4" component="span" mb="7%" textAlign="left" width="100%" />

                        <Stack justifyContent="flex-start" flexDirection="row" width="100%" >
                            <List >
                                {location.map(branch => (
                                    <>
                                        <BranchList color="#666" >
                                            <ListItem sx={{ width: "100%" }}  >

                                                <ListItemAvatar sx={{ float: "left" }}>
                                                    <img src={branch.src} alt={branch.BranchName} />
                                                </ListItemAvatar>
                                                <ListItemText sx={{ width: "100%",marginRight:"15%" }} >
                                                    <Text name={branch.BranchName} variant="p"
                                                        component="p" width="100%" fontWeight="bold" />

                                                    <Text name={branch.address} variant="subtitle2"
                                                        component="div" fontWeight="normal" width="100%" fontSize="12px"  />


                                                </ListItemText>
                                                <ListItemText >
                                                    <ArrowForwardIos />
                                                </ListItemText>


                                            </ListItem>
                                        </BranchList>
                                        <Divider />
                                    </>

                                ))}

                            </List>

                        </Stack>

                    </MainBox>
                </MainContainer>
            </Stack>
        </Box>

    )
}
export default Branches