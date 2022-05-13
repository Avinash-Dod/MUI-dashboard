import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#30AADD",
            
        },
        secondary: {
            main: "#212529"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "14px",
                    margin: "10px 0px 0px",
                    padding: "5px 25px",
                    position: "relative",
                    borderRadius: "50px",
                    
                   
                }
            }
        },
       
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "25px",
                    padding: "22px",
                    maxHeight: "70%",
                    height: "auto",
                    marginBottom:"30px"
                    
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "0px 10px 0px 0px",
                    marginBottom: "0px",
                }
            }
        },
       MuiListItemButton:{
           styleOverrides:{
               root:{
                   borderRadius:"8px",
                   color:"#ffffff"
               }
           }
       },
       MuiInputLabel:{
           styleOverrides:{
               root:{
                   color:"#212529",
                   textAlign:"left"
               }
           }
       }
     
       

    }
}

)