
import { Button, Card, Link, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material"


export const PageText = (props) => {
    const { variant, component, name, color, display, width, padding ,mt} = props
    
    return (
        <Typography variant={variant} component={component} name={name} color={color}
            sx={{
                width: { width },
                float: "left",
                fontWeight: "bold",
                display: { display },
                paddingBottom: { padding },
                marginTop:mt

            }} >
            {name}
        </Typography>
    )
}

export const SideList = (props) => {
    const { Icon, Text } = props

    return (
        <ListItem disablePadding  >

            <ListItemButton  >
                <ListItemIcon sx={{ color: "#ffffff" }}  >
                    {Icon}
                </ListItemIcon   >
                <Typography variant="h6" component="span" sx={{ color: "#ffffff", letterSpacing: "1px" }}  >
                    {Text}
                </Typography>

            </ListItemButton>

        </ListItem>
    )
}

export const AddButton = (props) => {
    const { href, size, startIcon, endIcon, name } = props
    return (
        <Link href={href} ><Button variant="contained"
            size={size}
            sx={{ float: "right", borderRadius: "50px", margin: " 0px",
            padding: "5px 25px", }}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {name}
        </Button></Link>
    )
}

export const PCard = (props) => {
    const { elevation, content } = props
    return (
        <Card elevation={elevation} sx={{ mt: "1%", Height: "100%", width: "95%" }}>
            {content}

        </Card>
    )
}