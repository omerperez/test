import { Alert } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomAlert = styled(Alert)(({ theme, severity = "info" }) => ({
  border: "solid 1px",
  borderColor: theme.palette[severity].main,
  color: theme.palette[severity].main,
}));
