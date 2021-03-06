import { MsqaureLogoSx, MsqaureSx } from "./VendorSx"
import MsquareLogo from '../assets/logo.png'
import MsLogo from '../assets/logo-white.PNG'
import { ArrowBack, ExpandMore } from "@mui/icons-material"
import { InputField, PageText, VendorIcon } from "../../components/UI/UI"
import { Accordion, Avatar, Box, Button, Container, IconButton, InputAdornment, ListItemButton, styled, Typography } from "@mui/material"




export const LoginContainer = () => {
    return (
        <WelcomeContainer sx={{ display: { xs: 'none', md: 'none', lg: 'flex', xl: 'flex' } }} >
            <Box>
                <VendorIcon sx={MsqaureSx}>
                    <img src={MsquareLogo} alt="Msquare" style={{ margin: "auto", height: "90px", width: "120px" }} />
                </VendorIcon>

                <PageText name="Welcome to M Square" variant="h3" component="span" mt="8%" color="#ffffff" />
            </Box>
        </WelcomeContainer>
    )
}

export const LogoImage = () => {
    return (
        <Box sx={{ display: { xs: 'block', md: 'block', lg: 'none', xl: 'none' } }}>
            <VendorIcon sx={MsqaureLogoSx}  >
                <img src={MsLogo} alt="Msquare" style={{ width: "65%" }} />
            </VendorIcon>

        </Box>
    )
}

export const BackButton = () => {
    return (
        <IconButton size="small" sx={{ float: "left", border: "solid black 1px", borderRadius: "50%", mb: "4%" }}>
            <ArrowBack color="secondary" />
        </IconButton>
    )
}

export const Text = (props) => {
    const { variant, component, name, color, display, width, padding, mt, mb, ml, mr, textAlign, fontWeight, float, fontSize } = props
    return (
        <Typography variant={variant} component={component} name={name} color={color}
            sx={{
                width: { width },
                float: float,
                fontWeight: fontWeight,
                display: { display },
                paddingBottom: { padding },
                marginTop: mt,
                marginRight: mr,
                marginBottom: mb,
                marginLeft: ml,
                textAlign: textAlign,
                fontSize: fontSize,

            }} >
            {name}
        </Typography>
    )
}

export const AccountFields = (props) => {
    const { placeholder } = props
    return (
        <InputField variant="outlined"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Avatar />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end" >

                        <input style={{ display: "none" }} accept="image/*" id="featured-Image" type="file" />

                        <Button variant="outlined" sx={{ marginTop: "0%" }} size="small"  >
                            <label htmlFor="featured-Image">
                                Choose File
                            </label>
                        </Button>

                    </InputAdornment>
                )
            }}
            size="medium" disabled placeholder={placeholder} />
    )
}

export const MainContainer = styled(Container)`
height: 100vh;
display: flex;
align-items: center;
background: #fff;
`
export const WelcomeContainer = styled(Container)`
width: 50%;
background: #30AADD;
position:  fixed;
text-align: center;
justify-content:  center;
align-items: center;
padding: 30px 0!important;
min-height: 100vh;
`
export const MainBox = styled(Box)`
display: grid; 
width: 100%; 
`
export const BranchList = styled(ListItemButton)`
text-decoration: none !important;
color:#212529;
`
export const VPageContainer = styled(Container)`
padding: 50px;
width: 100%;
height: 40em;
margin: 0 auto;

`
export const Offer = styled(Button)`
font-weight: 600;
color: #fff;
border-radius: 31px;
font-size: 18px;
margin-top:4%;
margin-bottom:%;
margin-left:2%;
margin-right:auto;
float:left;
`
export const Expand=styled(ExpandMore)`
color:#fff;
`
