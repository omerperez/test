import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LayoutWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 5),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  minHeight: "100vh",
}));
