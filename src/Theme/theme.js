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
                    marginBottom: "5px",
                    letterSpacing: "2px"
                }
            }
        },
        


    }
}

)