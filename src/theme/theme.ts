import type { RaThemeOptions } from "react-admin";

const fontFamily =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const baseOverrides = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
    },
  },
  MuiAutocomplete: {
    defaultProps: { fullWidth: true },
  },
  MuiTextField: {
    defaultProps: { variant: "filled", size: "small", fullWidth: true },
  },
  MuiFormControl: {
    defaultProps: { size: "small", fullWidth: true },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: 10,
        fontWeight: 600,
        fontSize: "0.875rem",
        padding: "6px 18px",
        transition: "all 0.2s ease",
      },
      sizeSmall: { padding: "4px 14px", fontSize: "0.8125rem" },
      containedPrimary: {
        boxShadow: "0 2px 8px rgba(99, 102, 241, 0.25)",
        "&:hover": {
          boxShadow: "0 4px 16px rgba(99, 102, 241, 0.35)",
          transform: "translateY(-1px)",
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 14 },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: { fontWeight: 500, fontSize: "0.75rem", borderRadius: 8 },
      sizeSmall: { borderRadius: 6, fontSize: "0.6875rem" },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        "& .MuiTableCell-root": { fontWeight: 600 },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: { borderRadius: 8, padding: "6px 12px", fontSize: "0.8125rem" },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: { borderRadius: 16 },
    },
  },
  RaLayout: {
    styleOverrides: {
      root: {
        minWidth: 0,
      },
    },
  },
};

export const lightTheme: RaThemeOptions = {
  typography: {
    fontFamily,
    h6: { fontWeight: 600, fontSize: "0.9375rem", letterSpacing: "-0.01em" },
    body2: { fontSize: "0.8125rem", letterSpacing: "-0.005em" },
  },
  sidebar: { width: 256, closedWidth: 60 },
  palette: {
    mode: "light",
    primary: {
      main: "#6366f1",
      light: "#818cf8",
      dark: "#4f46e5",
    },
    secondary: {
      main: "#8b5cf6",
      light: "#a78bfa",
      dark: "#7c3aed",
    },
    error: {
      main: "#ef4444",
      light: "#fca5a5",
      dark: "#dc2626",
    },
    warning: {
      main: "#f59e0b",
      light: "#fdba74",
      dark: "#d97706",
    },
    success: {
      main: "#10b981",
      light: "#6ee7b7",
      dark: "#059669",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    divider: "rgba(0, 0, 0, 0.06)",
    text: {
      primary: "#0f172a",
      secondary: "#64748b",
    },
  },
  components: {
    ...baseOverrides,
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        "*::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },
        "*::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "rgba(0,0,0,0.12)",
          borderRadius: "3px",
          "&:hover": { background: "rgba(0,0,0,0.2)" },
        },
      },
    },
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
          borderRadius: 14,
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: "0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)",
            borderColor: "rgba(99, 102, 241, 0.2)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.85)",
          color: "#0f172a",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        },
      },
    },
    RaSidebar: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0f172a",
          borderRight: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          fontWeight: 600,
          fontSize: "0.875rem",
          padding: "6px 18px",
          transition: "all 0.2s ease",
        },
        sizeSmall: { padding: "4px 14px", fontSize: "0.8125rem" },
        containedPrimary: {
          boxShadow: "0 2px 8px rgba(99, 102, 241, 0.25)",
          "&:hover": {
            boxShadow: "0 4px 16px rgba(99, 102, 241, 0.35)",
            transform: "translateY(-1px)",
          },
        },
        outlined: {
          "&:hover": {
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: 600,
            fontSize: "0.6875rem",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "#64748b",
            backgroundColor: "rgba(0,0,0,0.02)",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            padding: "12px 16px",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(0,0,0,0.04)",
          fontSize: "0.8125rem",
          padding: "12px 16px",
          color: "#334155",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "rgba(0,0,0,0.06)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.09)" },
          "&.Mui-focused": { backgroundColor: "rgba(99, 102, 241, 0.06)" },
        },
        input: {
          padding: "10px 14px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        filled: {
          transform: "translate(14px, 12px) scale(1)",
          "&.MuiInputLabel-shrink": { transform: "translate(14px, -8px) scale(0.75)" },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          paddingTop: 10,
          paddingBottom: 10,
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 10px",
          padding: "8px 12px",
          color: "#94a3b8",
          transition: "all 0.15s ease",
          "& .MuiSvgIcon-root": {
            color: "#64748b",
            fontSize: "1.25rem",
            transition: "color 0.15s ease",
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.06)",
            color: "#e2e8f0",
            "& .MuiSvgIcon-root": { color: "#94a3b8" },
          },
          "&.RaMenuItemLink-active": {
            backgroundColor: "rgba(99, 102, 241, 0.15)",
            color: "#818cf8",
            "& .MuiSvgIcon-root": { color: "#818cf8" },
            "&:hover": {
              backgroundColor: "rgba(99, 102, 241, 0.22)",
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
    RaList: {
      styleOverrides: {
        root: {},
      },
    },
    RaListToolbar: {
      styleOverrides: {
        root: {
          padding: "12px 16px 0",
          backgroundColor: "transparent",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        },
      },
    },
    RaDatagrid: {
      styleOverrides: {
        root: {
          overflowX: "auto",
          "& .RaDatagrid-rowOdd": {
            backgroundColor: "rgba(0,0,0,0.015)",
          },
          "& .RaDatagrid-rowEven": {
            backgroundColor: "transparent",
          },
          "& .RaDatagrid-row:hover": {
            backgroundColor: "rgba(99, 102, 241, 0.03)",
          },
          "& .RaDatagrid-headerCell": {
            padding: "12px 16px",
          },
        },
      },
    },
  },
};

export const darkTheme: RaThemeOptions = {
  typography: {
    fontFamily,
    h6: { fontWeight: 600, fontSize: "0.9375rem", letterSpacing: "-0.01em" },
    body2: { fontSize: "0.8125rem", letterSpacing: "-0.005em" },
  },
  sidebar: { width: 256, closedWidth: 60 },
  palette: {
    mode: "dark",
    primary: {
      main: "#38bdf8",
      light: "#7dd3fc",
      dark: "#0284c7",
    },
    secondary: {
      main: "#a855f7",
      light: "#c084fc",
      dark: "#7c3aed",
    },
    error: {
      main: "#f87171",
      light: "#fca5a5",
      dark: "#dc2626",
    },
    warning: {
      main: "#fbbf24",
      light: "#fde68a",
      dark: "#d97706",
    },
    success: {
      main: "#34d399",
      light: "#6ee7b7",
      dark: "#059669",
    },
    background: {
      default: "#07070d",
      paper: "#0e0e18",
    },
    divider: "rgba(255, 255, 255, 0.05)",
    text: {
      primary: "#f1f5f9",
      secondary: "#94a3b8",
    },
  },
  components: {
    ...baseOverrides,
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        "*::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },
        "*::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "rgba(255,255,255,0.08)",
          borderRadius: "3px",
          "&:hover": { background: "rgba(255,255,255,0.15)" },
        },
      },
    },
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
          borderRadius: 14,
          background: "rgba(14, 14, 24, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.02) inset",
          transition: "all 0.25s ease",
          "&:hover": {
            borderColor: "rgba(56, 189, 248, 0.15)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(56, 189, 248, 0.04), 0 1px 0 rgba(255,255,255,0.02) inset",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(14, 14, 24, 0.85)",
          color: "#f1f5f9",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        },
      },
    },
    RaSidebar: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0a0a14",
          borderRight: "1px solid rgba(255,255,255,0.03)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          fontWeight: 600,
          fontSize: "0.875rem",
          padding: "6px 18px",
          transition: "all 0.2s ease",
        },
        sizeSmall: { padding: "4px 14px", fontSize: "0.8125rem" },
        containedPrimary: {
          boxShadow: "0 2px 12px rgba(56, 189, 248, 0.2)",
          background: "linear-gradient(135deg, #0284c7, #38bdf8)",
          "&:hover": {
            boxShadow: "0 4px 20px rgba(56, 189, 248, 0.3)",
            transform: "translateY(-1px)",
          },
        },
        outlined: {
          borderColor: "rgba(255,255,255,0.1)",
          "&:hover": {
            borderColor: "rgba(56, 189, 248, 0.3)",
            backgroundColor: "rgba(56, 189, 248, 0.05)",
            transform: "translateY(-1px)",
          },
        },
        text: {
          "&:hover": {
            backgroundColor: "rgba(56, 189, 248, 0.06)",
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: 600,
            fontSize: "0.6875rem",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "#64748b",
            backgroundColor: "rgba(255,255,255,0.015)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "12px 16px",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255,255,255,0.03)",
          fontSize: "0.8125rem",
          padding: "12px 16px",
          color: "#cbd5e1",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "rgba(255,255,255,0.07)",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
          "&.Mui-focused": {
            backgroundColor: "rgba(56, 189, 248, 0.08)",
            boxShadow: "0 0 0 2px rgba(56, 189, 248, 0.12)",
          },
        },
        input: {
          padding: "10px 14px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        filled: {
          transform: "translate(14px, 12px) scale(1)",
          "&.MuiInputLabel-shrink": { transform: "translate(14px, -8px) scale(0.75)" },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(56, 189, 248, 0.5)",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          paddingTop: 10,
          paddingBottom: 10,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500, fontSize: "0.75rem", borderRadius: 8 },
        sizeSmall: { borderRadius: 6, fontSize: "0.6875rem" },
        colorPrimary: {
          background: "rgba(56, 189, 248, 0.12)",
          color: "#7dd3fc",
          border: "1px solid rgba(56, 189, 248, 0.2)",
        },
        colorSuccess: {
          background: "rgba(52, 211, 153, 0.12)",
          color: "#6ee7b7",
          border: "1px solid rgba(52, 211, 153, 0.2)",
        },
        colorWarning: {
          background: "rgba(251, 191, 36, 0.12)",
          color: "#fde68a",
          border: "1px solid rgba(251, 191, 36, 0.2)",
        },
        colorError: {
          background: "rgba(248, 113, 113, 0.12)",
          color: "#fca5a5",
          border: "1px solid rgba(248, 113, 113, 0.2)",
        },
        outlined: {
          borderColor: "rgba(255,255,255,0.08)",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.04)" },
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 10px",
          padding: "8px 12px",
          color: "#64748b",
          transition: "all 0.15s ease",
          "& .MuiSvgIcon-root": {
            color: "#475569",
            fontSize: "1.25rem",
            transition: "all 0.15s ease",
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.04)",
            color: "#94a3b8",
            "& .MuiSvgIcon-root": { color: "#64748b" },
          },
          "&.RaMenuItemLink-active": {
            backgroundColor: "rgba(56, 189, 248, 0.08)",
            color: "#7dd3fc",
            "& .MuiSvgIcon-root": { color: "#38bdf8" },
            "&:hover": {
              backgroundColor: "rgba(56, 189, 248, 0.14)",
            },
          },
        },
      },
    },
    RaList: {
      styleOverrides: {
        root: {},
      },
    },
    RaListToolbar: {
      styleOverrides: {
        root: {
          padding: "12px 16px 0",
          backgroundColor: "transparent",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
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
          overflowX: "auto",
          "& .RaDatagrid-rowOdd": {
            backgroundColor: "rgba(255,255,255,0.012)",
          },
          "& .RaDatagrid-rowEven": {
            backgroundColor: "transparent",
          },
          "& .RaDatagrid-row:hover": {
            backgroundColor: "rgba(56, 189, 248, 0.03)",
          },
        },
      },
    },
  },
};
