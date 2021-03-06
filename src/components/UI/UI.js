import { ModeEdit } from "@mui/icons-material"
import { Avatar, Button, Card, CardContent, Container, Dialog, Input, ListItem, MenuItem, styled, TextField, Typography } from "@mui/material"

//Reusable Components
export const PageText = (props) => {

    const { variant, component, name, color, display, width, padding, mt, mb, textAlign } = props
    return (
        <Typography variant={variant} component={component} name={name} color={color}
            sx={{
                width: { width },
                float: "left",
                fontWeight: "bold",
                display: { display },
                paddingBottom: { padding },
                marginTop: mt,
                textAlign: textAlign,
                marginBottom: mb
            }} >
            {name}
        </Typography>
    )
}

export const SideList = (props) => {
    const { Text } = props
    return (
        <ListItem sx={{padding:"0%"}} >
            <ListHeading variant="p" component="span"   >
                {Text}
            </ListHeading>
        </ListItem>
    )
}

export const AddButton = (props) => {
    const { size, startIcon, endIcon, name, onClick } = props
    return (
        <Button variant="contained"
            size={size}
            sx={{
                float: "right", borderRadius: "50px", margin: " 0px",
                padding: "5px 25px", color: "#ffffff", mt: "35px"
            }}
            startIcon={startIcon}
            endIcon={endIcon}
            onClick={onClick}
        >
            {name}
        </Button>
    )
}

export const PCard = (props) => {
    const { elevation, content, width, textAlign, float, margin, padding, height } = props
    return (
        <Card elevation={elevation} sx={{ height: height, width: { width }, color: "Black", textAlign: textAlign, float: float, margin: margin, padding: padding }}>
            {content}
        </Card>
    )
}

export const LoginCard = (props) => {
    const { elevation, content, width, textAlign, float, margin, padding, height, bgColor } = props
    return (
        <Card elevation={elevation} sx={{ height: height, width: { width }, backgroundColor: bgColor, color: "#ffffff", textAlign: textAlign, float: float, margin: margin, padding: padding }}>
            {content}
        </Card>
    )
}

export const CardButton = (props) => {
    const { size, startIcon, endIcon, name, onClick } = props
    return (
        <Button size={size} onClick={onClick} startIcon={startIcon} endIcon={endIcon} variant="contained" sx={{ color: "#ffffff",padding:"8px 36px" ,fontSize:"16px"}} >{name} </Button>
    )
}
// styled components

export const ListHeading = styled(Typography)`
display: block;
width:100%;
padding: 12px 14px 14px 12px;
font-size: 16px;
font-weight: 400;
line-height:20px;
color: #fff;
&:hover{
    color:#30AADD;
    background:#fafafa;
    padding: 12px 14px 14px 12px;
    width:100%;
    border-radius:8px;
}
`;

export const PageContainer = styled(Container)`
width:83%;
position: relative;
left: 16%;
background:#fafafa;
top: 70px;
height:{xs:'100%'};

} 
`;

export const ProfilePic = styled(Avatar)`
width: 120px;
height: 120px;
background:#fafafa;
color:#30AADD;
margin:auto;
border:1px solid #30AADD;
box-shadow:1px 1px 1px 1px #ededed;
`;

export const Pencil = styled(ModeEdit)`
border:1px solid #30AADD;
border-radius:50%;
padding:20%;
background:#30AADD;
color:#ffffff;
box-shadow:1px 1px 1px 1px #ededed;
`;

export const InputField = styled(TextField)`
fieldset{ 
    border-radius:25px;      
};
border-radius:25px;
width:100%;
margin-top:2%;
margin-bottom:2%;
`;

export const SearchField = styled(TextField)`
fieldset{ 
    border-radius:50px;      
};
`;

export const LoginField = styled(Input)`
input{
    color:#ffffff;    
};
width:100%;
margin-top:3%;
margin-bottom:3%;
`;

export const SubmitButton = styled(Button)`
color:#ffffff;
width:60%;
padding:10px 45px;
`
export const FormDialog = styled(Dialog)`
PaperProps:{
    border-radius:50px;
    background:#30AADD;
}
`;

export const Logo = styled(Avatar)`
color: #fff;
font-size: 36px;
font-weight: 600;
line-height: 40px;
border-radius:0px;
text-decoration: none;
background-color: transparent;
vertical-align: middle;
border-style: none;
width: 150px;
`
export const VendorCard = styled(Card)`
padding: 24px;
background: #30aadd21;
border-radius: 25px;
text-align: center;
display:block;
`
export const VendorCardContent = styled(CardContent)`
line-height: 30px;
margin: 10px 0 10px;
display: block;
`
export const VendorCardHead = styled(Typography)`
font-size: 18px;
color: #000;
`
export const VendorIcon = styled(CardContent)`
width: 80px;
height: 80px;
background: #fff;
text-align: center;
border-radius: 50%;
padding: 1%;
display: flex;
align-items: center;
justify-content: center;
margin:auto;
`
export const OtpField = styled(Input)`
font-weight: normal;
outline: none;
font-size: 16px;
line-height: 32px;
color: #081131;
background: #EBECEF;
border: 1px solid #EBECEF;
box-sizing: border-box;
border-radius: 8px;
padding: 14px 16px;
transition: 0.2s ease-out;
width: 100%;
height: 80px;
text-align: center;
`

export const SettingMenu = styled(MenuItem)`
left: auto;
color: #212529;
text-align: left;
background: #30AADD;
&:hover{
    color:#30AADD;
}
`