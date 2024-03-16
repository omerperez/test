import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: "Noto Sans JP",
    subtitle1: {
      fontSize: 14,
      color: "gray",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          maxHeight: 40,
          padding: 16,
          borderRadius: 6,
        },
      },
    },
  },
});
