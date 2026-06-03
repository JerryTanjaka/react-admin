import type { RaThemeOptions } from "react-admin";

const baseTheme: RaThemeOptions = {
  typography: {
    h6: { fontWeight: 600 },
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
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
          fontWeight: 500,
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

export const lightTheme: RaThemeOptions = {
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#7c4dff",
      light: "#b47cff",
      dark: "#4a1cb5",
    },
    secondary: {
      main: "#00bfa5",
      light: "#5df2d6",
      dark: "#008e76",
    },
    background: {
      default: "#f5f6fa",
      paper: "#ffffff",
    },
    divider: "rgba(0, 0, 0, 0.07)",
    text: {
      primary: "#1a1a2e",
      secondary: "rgba(26, 26, 46, 0.65)",
    },
  },
  components: {
    ...baseTheme.components,
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
          borderRadius: 12,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(124, 77, 255, 0.08)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#1a1a2e",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#ffffff",
          borderRight: "1px solid rgba(0,0,0,0.06)",
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 8px",
          color: "rgba(26, 26, 46, 0.7)",
          "&:hover": {
            backgroundColor: "rgba(124, 77, 255, 0.06)",
            color: "#7c4dff",
          },
          "&.RaMenuItemLink-active": {
            backgroundColor: "rgba(124, 77, 255, 0.1)",
            color: "#7c4dff",
            "&:hover": {
              backgroundColor: "rgba(124, 77, 255, 0.14)",
            },
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
  },
};

export const darkTheme: RaThemeOptions = {
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#b388ff",
      light: "#d4bfff",
      dark: "#7c4dff",
    },
    secondary: {
      main: "#64ffda",
      light: "#9effeb",
      dark: "#00bfa5",
    },
    background: {
      default: "#0f0f1a",
      paper: "#1a1a2e",
    },
    divider: "rgba(255, 255, 255, 0.06)",
    text: {
      primary: "#e8eaf0",
      secondary: "rgba(232, 234, 240, 0.65)",
    },
  },
  components: {
    ...baseTheme.components,
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
          borderRadius: 12,
          backgroundColor: "#1a1a2e",
          border: "1px solid rgba(179, 136, 255, 0.08)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            borderColor: "rgba(179, 136, 255, 0.2)",
            boxShadow: "0 6px 24px rgba(179, 136, 255, 0.06)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#151528",
          color: "#e8eaf0",
          boxShadow: "none",
          borderBottom: "1px solid rgba(179, 136, 255, 0.1)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#151528",
          borderRight: "1px solid rgba(179, 136, 255, 0.06)",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            backgroundColor: "rgba(179, 136, 255, 0.04)",
            borderBottom: "1px solid rgba(179, 136, 255, 0.08)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.07)",
          },
          "&$focused": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 8px",
          color: "rgba(232, 234, 240, 0.65)",
          "&:hover": {
            backgroundColor: "rgba(179, 136, 255, 0.08)",
            color: "#b388ff",
          },
          "&.RaMenuItemLink-active": {
            backgroundColor: "rgba(179, 136, 255, 0.12)",
            color: "#b388ff",
            "&:hover": {
              backgroundColor: "rgba(179, 136, 255, 0.18)",
            },
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
  },
};
