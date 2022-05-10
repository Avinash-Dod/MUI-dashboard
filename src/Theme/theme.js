import { createTheme } from "@mui/material";
export const theme = createTheme({
    palette: {
        primary: {
            main: "#25476a",
            light: "#03a9f4",
        },
        secondary: {
            main: "#ab47bc"
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
                    marginBottom: "10px",
                    letterSpacing: "2px",
                    marginTop: "1%"

                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "25px",
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "10px 10px 0px 10px",
                    width: "50%",
                    margin: "auto",
                }
            }
        },
      



    }
}

)