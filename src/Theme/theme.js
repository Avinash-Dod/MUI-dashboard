import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#30AADD",

        },
        secondary: {
            main: "#212529"
        },
        other:{
            main:"#ffffff"
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

        MuiAppBar: {
            styleOverrides: {
                root: {
                    zIndex: 1100,
                    padding: "auto 8px",
                    position: "fixed"
                }
            }
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "25px",
                    padding: "22px",
                    maxHeight: "60%",
                    height: "auto",
                    marginBottom: "30px"

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

        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    color: "#ffffff"
                }
            }
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#212529",
                    textAlign: "left",

                }
            }
        },
        
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: "25px",
                    flex: "1 1 auto",
                    padding: "10px 0px 10px 0"
                },
                root: {
                    overflow: "hidden"
                }
            }
        },

    }
}

)