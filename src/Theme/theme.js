import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#30AADD",

        },
        secondary: {
            main: "#212529"
        },
        other: {
            main: "#ffffff"
        },
        offer: {
            main: "#FF0000"
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
                    "&.Mui-disabled": {
                        backgroundColor: "#30AADD",
                        color: "#fff",
                        opacity: 0.7


                    }
                }
            }
        },

        MuiAppBar: {
            styleOverrides: {
                root: {

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
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: 0,
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: 0,
                    paddingRight: 0,
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: 68,
                    height: 34,
                    padding: 7,
                    '& .MuiSwitch-switchBase': {
                        margin: 0,
                        padding: 0,
                        transform: 'translateX(6px)',
                        '&.Mui-checked': {
                            transform: 'translateX(30px)',
                        },
                    },
                    '& .MuiSwitch-thumb': {
                        width: 32,
                        height: 33,
                        
                    },
                    '& .MuiSwitch-track': {
                        borderRadius: 20 / 2,
                    },
                }
            }
        }

    }
}

)