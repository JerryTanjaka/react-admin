import type { RaThemeOptions } from "react-admin";

const baseComponents = {
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
        fontWeight: 600,
        fontSize: "0.875rem",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 12 },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        "& .MuiTableCell-root": { fontWeight: 600 },
      },
    },
  },
};

export const lightTheme: RaThemeOptions = {
  typography: {
    h6: { fontWeight: 600, fontSize: "1rem" },
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  sidebar: { width: 256, closedWidth: 60 },
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
      default: "#f1f5f9",
      paper: "#ffffff",
    },
    divider: "rgba(0, 0, 0, 0.06)",
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
  },
  components: {
    ...baseComponents,
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "1px solid rgba(0,0,0,0.04)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          transition: "box-shadow 0.2s, border-color 0.2s",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            borderColor: "rgba(124, 58, 237, 0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#0f172a",
          boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
          backdropFilter: "blur(12px)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0f172a",
          borderRight: "none",
          "& .MuiTypography-root": { color: "#cbd5e1" },
          "& .MuiListItemText-root": { color: "#cbd5e1" },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: 600,
            backgroundColor: "#f8fafc",
            color: "#475569",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(0,0,0,0.04)",
          fontSize: "0.875rem",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500, fontSize: "0.75rem" },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 8px",
          color: "#94a3b8",
          "& .MuiSvgIcon-root": { color: "#64748b" },
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.06)",
            color: "#e2e8f0",
            "& .MuiSvgIcon-root": { color: "#94a3b8" },
          },
          "&.RaMenuItemLink-active": {
            backgroundColor: "rgba(124, 58, 237, 0.18)",
            color: "#a78bfa",
            "& .MuiSvgIcon-root": { color: "#a78bfa" },
            "&:hover": {
              backgroundColor: "rgba(124, 58, 237, 0.24)",
            },
          },
        },
      },
    },
    RaToolbar: {
      styleOverrides: {
        root: { backgroundColor: "transparent" },
      },
    },
    RaDatagrid: {
      styleOverrides: {
        root: {
          "& .RaDatagrid-rowOdd": {
            backgroundColor: "rgba(0,0,0,0.02)",
          },
          "& .RaDatagrid-rowEven": {
            backgroundColor: "transparent",
          },
          "& .RaDatagrid-row:hover": {
            backgroundColor: "rgba(124, 58, 237, 0.04)",
          },
        },
      },
    },
  },
};

export const darkTheme: RaThemeOptions = {
  typography: {
    h6: { fontWeight: 600, fontSize: "1rem" },
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  sidebar: { width: 256, closedWidth: 60 },
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
      default: "#0b0b12",
      paper: "#14141f",
    },
    divider: "rgba(255, 255, 255, 0.06)",
    text: {
      primary: "#f1f5f9",
      secondary: "#94a3b8",
    },
  },
  components: {
    ...baseComponents,
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#14141f",
          border: "1px solid rgba(255,255,255,0.04)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          transition: "border-color 0.2s, box-shadow 0.2s",
          "&:hover": {
            borderColor: "rgba(167, 139, 250, 0.2)",
            boxShadow: "0 4px 16px rgba(167, 139, 250, 0.04)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#14141f",
          color: "#f1f5f9",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          backdropFilter: "blur(12px)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0f0f19",
          borderRight: "1px solid rgba(255,255,255,0.03)",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: 600,
            backgroundColor: "rgba(255,255,255,0.02)",
            color: "#94a3b8",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          fontSize: "0.875rem",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.04)",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.07)" },
          "&$focused": { backgroundColor: "rgba(255,255,255,0.05)" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500, fontSize: "0.75rem" },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 8px",
          color: "#94a3b8",
          "&:hover": {
            backgroundColor: "rgba(167, 139, 250, 0.06)",
            color: "#a78bfa",
            "& .MuiSvgIcon-root": { color: "#a78bfa" },
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
    RaDatagrid: {
      styleOverrides: {
        root: {
          "& .RaDatagrid-rowOdd": {
            backgroundColor: "rgba(255,255,255,0.015)",
          },
          "& .RaDatagrid-rowEven": {
            backgroundColor: "transparent",
          },
          "& .RaDatagrid-row:hover": {
            backgroundColor: "rgba(167, 139, 250, 0.04)",
          },
        },
      },
    },
  },
};
