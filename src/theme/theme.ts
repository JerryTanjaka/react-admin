import type { RaThemeOptions } from "react-admin";

export const lightTheme: RaThemeOptions = {
  typography: {
    h6: { fontWeight: 600 },
  },
  sidebar: {
    width: 240,
    closedWidth: 56,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#7c3aed",
      light: "#a78bfa",
      dark: "#5b21b6",
    },
    secondary: {
      main: "#0ea5e9",
      light: "#7dd3fc",
      dark: "#0369a1",
    },
    background: {
      default: "#f3f4f6",
      paper: "#ffffff",
    },
    divider: "rgba(0, 0, 0, 0.08)",
    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#111827",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
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
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 8, fontWeight: 500 },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: 600,
            backgroundColor: "#f9fafb",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderBottom: "1px solid rgba(0,0,0,0.06)" },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "filled", margin: "dense", size: "small", fullWidth: true },
    },
    MuiFormControl: {
      defaultProps: { variant: "filled", margin: "dense", size: "small", fullWidth: true },
    },
    MuiAutocomplete: {
      defaultProps: { fullWidth: true },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 8px",
          color: "#6b7280",
          "&:hover": {
            backgroundColor: "rgba(124, 58, 237, 0.06)",
            color: "#7c3aed",
          },
          "&.RaMenuItemLink-active": {
            backgroundColor: "rgba(124, 58, 237, 0.1)",
            color: "#7c3aed",
          },
        },
      },
    },
    RaToolbar: {
      styleOverrides: {
        root: { backgroundColor: "transparent" },
      },
    },
  },
};

export const darkTheme: RaThemeOptions = {
  typography: {
    h6: { fontWeight: 600 },
  },
  sidebar: {
    width: 240,
    closedWidth: 56,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#a78bfa",
      light: "#c4b5fd",
      dark: "#7c3aed",
    },
    secondary: {
      main: "#38bdf8",
      light: "#7dd3fc",
      dark: "#0ea5e9",
    },
    background: {
      default: "#0f0f11",
      paper: "#1a1a1d",
    },
    divider: "rgba(255, 255, 255, 0.08)",
    text: {
      primary: "#f3f4f6",
      secondary: "#9ca3af",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#1a1a1d",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a1a1d",
          color: "#f3f4f6",
          boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#151517",
          borderRight: "1px solid rgba(255,255,255,0.04)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 8, fontWeight: 500 },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: 600,
            backgroundColor: "rgba(255,255,255,0.03)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderBottom: "1px solid rgba(255,255,255,0.04)" },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "filled", margin: "dense", size: "small", fullWidth: true },
    },
    MuiFormControl: {
      defaultProps: { variant: "filled", margin: "dense", size: "small", fullWidth: true },
    },
    MuiAutocomplete: {
      defaultProps: { fullWidth: true },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.04)",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.07)" },
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 8px",
          color: "#9ca3af",
          "&:hover": {
            backgroundColor: "rgba(167, 139, 250, 0.08)",
            color: "#a78bfa",
          },
          "&.RaMenuItemLink-active": {
            backgroundColor: "rgba(167, 139, 250, 0.12)",
            color: "#a78bfa",
          },
        },
      },
    },
    RaToolbar: {
      styleOverrides: {
        root: { backgroundColor: "transparent" },
      },
    },
  },
};
