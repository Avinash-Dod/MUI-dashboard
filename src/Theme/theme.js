import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#30AADD",
            light: "#25676a"

        },
        secondary: {
            main: "#212529"
        },
        white: {
            main: "#ffffff"
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

                    color: "#ffffff"

                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "25px",
                    padding: "22px",
                    height: "70%",





                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "0px 10px 0px 0px",
                    marginBottom: "0px"

                }
            }
        },





    }
}

)