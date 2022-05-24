import { ArrowBack } from "@mui/icons-material"
import { Avatar, Box, Button, Container, IconButton, InputAdornment, ListItemButton, styled, Typography } from "@mui/material"
import { MsqaureLogoSx, MsqaureSx } from "./VendorSx"
import MsquareLogo from '../assets/logo.png'
import { InputField, PageText, VendorIcon } from "../../components/UI/UI"

export const LoginContainer = () => {
    return (
        <WelcomeContainer sx={{ display: { xs: 'none', md: 'none', lg: 'flex', xl: 'flex' } }} >
            <Box>
                <VendorIcon sx={MsqaureSx}>
                    <img src={MsquareLogo} alt="Msquare" style={{ height: "90px", width: "120px" }} />
                </VendorIcon>

                <PageText name="Welcome to M Square" variant="h3" component="span" mt="8%" color="#ffffff" />
            </Box>
        </WelcomeContainer>
    )
}
export const LogoImage = () => {
    return (
        <Box sx={{ display: { xs: 'flex', md: 'flex', lg: 'none', xl: 'none' } }}>
            <VendorIcon sx={MsqaureLogoSx }>
                <img src={MsquareLogo} alt="Msquare" style={{ height: "70px", width: "100px" }} />
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
    const { variant, component, name, color, display, width, padding, mt, mb, textAlign, fontWeight, float, fontSize } = props
    return (
        <Typography variant={variant} component={component} name={name} color={color}
            sx={{
                width: { width },
                float: float,
                fontWeight: fontWeight,
                display: { display },
                paddingBottom: { padding },
                marginTop: mt,
                textAlign: textAlign,
                marginBottom: mb,
                fontSize: fontSize
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
                        <input
                            accept="image/*"
                            id="featured-Image"
                            type="file"
                            hidden
                        />
                        <Button variant="outlined"
                            size="small"  >
                            <label htmlFor="featured-Image">
                                Choose File
                            </label>
                        </Button>
                    </InputAdornment>
                )
            }}
            size="small" disabled placeholder={placeholder} />
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
cursor: pointer;
color:#212529;
`