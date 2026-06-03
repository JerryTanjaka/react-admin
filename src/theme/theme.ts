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
      default: "#f0eef8",
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
          boxShadow: "0 1px 3px rgba(124,77,255,0.06), 0 1px 2px rgba(124,77,255,0.04)",
          "&:hover": {
            boxShadow: "0 4px 16px rgba(124, 77, 255, 0.1)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #f8f6ff 0%, #ffffff 100%)",
          color: "#1a1a2e",
          boxShadow: "none",
          borderBottom: "2px solid rgba(124, 77, 255, 0.15)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#faf9ff",
          borderRight: "1px solid rgba(124, 77, 255, 0.08)",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            backgroundColor: "rgba(124, 77, 255, 0.04)",
            fontWeight: 600,
          },
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
            backgroundColor: "rgba(124, 77, 255, 0.08)",
            color: "#7c4dff",
          },
          "&.RaMenuItemLink-active": {
            backgroundColor: "rgba(124, 77, 255, 0.12)",
            color: "#7c4dff",
            borderLeft: "3px solid #7c4dff",
            "&:hover": {
              backgroundColor: "rgba(124, 77, 255, 0.16)",
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
      default: "#1e1e2e",
      paper: "#2a2a3d",
    },
    divider: "rgba(255, 255, 255, 0.08)",
    text: {
      primary: "#f0f0f5",
      secondary: "rgba(240, 240, 245, 0.7)",
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
          backgroundColor: "#2a2a3d",
          border: "1px solid rgba(179, 136, 255, 0.1)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          "&:hover": {
            borderColor: "rgba(179, 136, 255, 0.25)",
            boxShadow: "0 4px 16px rgba(179, 136, 255, 0.08)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#2a2a3d",
          color: "#f0f0f5",
          boxShadow: "none",
          borderBottom: "1px solid rgba(179, 136, 255, 0.12)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#252538",
          borderRight: "1px solid rgba(179, 136, 255, 0.08)",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            backgroundColor: "rgba(179, 136, 255, 0.06)",
            borderBottom: "1px solid rgba(179, 136, 255, 0.1)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
          "&$focused": {
            backgroundColor: "rgba(255, 255, 255, 0.06)",
          },
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 8px",
          color: "rgba(240, 240, 245, 0.65)",
          "&:hover": {
            backgroundColor: "rgba(179, 136, 255, 0.1)",
            color: "#b388ff",
          },
          "&.RaMenuItemLink-active": {
            backgroundColor: "rgba(179, 136, 255, 0.15)",
            color: "#b388ff",
            "&:hover": {
              backgroundColor: "rgba(179, 136, 255, 0.2)",
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
