import { RaThemeOptions } from "react-admin";
import { deepmerge } from "@mui/utils";

const baseTheme = {
  typography: {
    h6: { fontWeight: 600 },
  },
  sidebar: {
    width: 240,
    closedWidth: 56,
  },
  components: {
    MuiAutocomplete: {
      defaultProps: { fullWidth: true },
    },
    MuiTextField: {
      defaultProps: { variant: "filled", margin: "dense", size: "small", fullWidth: true },
    },
    MuiFormControl: {
      defaultProps: { variant: "filled", margin: "dense", size: "small", fullWidth: true },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: 600,
          },
        },
      },
    },
  },
};

export const lightTheme: RaThemeOptions = deepmerge(baseTheme, {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#7c4dff",
      light: "#b47cff",
      dark: "#3f1dcb",
    },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
    divider: "rgba(0, 0, 0, 0.08)",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #1565c0 0%, #1976d2 50%, #42a5f5 100%)",
          boxShadow: "0 2px 8px rgba(21, 101, 192, 0.3)",
        },
      },
    },
    RaToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    RaSidebar: {
      styleOverrides: {
        root: {
          "& .MuiDrawer-paper": {
            background: "#ffffff",
            borderRight: "1px solid rgba(0,0,0,0.06)",
          },
        },
      },
    },
  },
});

export const darkTheme: RaThemeOptions = deepmerge(baseTheme, {
  palette: {
    mode: "dark",
    primary: {
      main: "#00b4ff",
      light: "#56cfff",
      dark: "#0084c7",
    },
    secondary: {
      main: "#7c4dff",
      light: "#b47cff",
      dark: "#3f1dcb",
    },
    background: {
      default: "#0a0e27",
      paper: "#131838",
    },
    divider: "rgba(255, 255, 255, 0.06)",
    text: {
      primary: "#e8eaed",
      secondary: "rgba(232, 234, 237, 0.7)",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#131838",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, rgba(19, 24, 56, 0.9) 0%, rgba(26, 35, 80, 0.9) 100%)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0, 180, 255, 0.1)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 180, 255, 0.05)",
          "&:hover": {
            border: "1px solid rgba(0, 180, 255, 0.25)",
            boxShadow: "0 6px 24px rgba(0, 180, 255, 0.15), 0 0 0 1px rgba(0, 180, 255, 0.1)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #0a0e27 0%, #131838 50%, #1a2350 100%)",
          borderBottom: "1px solid rgba(0, 180, 255, 0.15)",
          boxShadow: "0 2px 16px rgba(0, 180, 255, 0.08)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "linear-gradient(180deg, #0a0e27 0%, #131838 100%)",
          borderRight: "1px solid rgba(0, 180, 255, 0.1)",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            backgroundColor: "rgba(0, 180, 255, 0.05)",
            borderBottom: "1px solid rgba(0, 180, 255, 0.1)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
          "&$focused": {
            backgroundColor: "rgba(255, 255, 255, 0.06)",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(0, 180, 255, 0.08)",
          },
        },
      },
    },
    RaToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    RaSidebar: {
      styleOverrides: {
        root: {
          "& .MuiDrawer-paper": {
            background: "linear-gradient(180deg, #0a0e27 0%, #131838 100%)",
            borderRight: "1px solid rgba(0, 180, 255, 0.1)",
          },
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 8px",
          "&.RaMenuItemLink-active": {
            backgroundColor: "rgba(0, 180, 255, 0.12)",
            "&:hover": {
              backgroundColor: "rgba(0, 180, 255, 0.18)",
            },
          },
        },
      },
    },
  },
});
