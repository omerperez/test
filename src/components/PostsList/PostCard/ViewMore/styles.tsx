import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ViewMoreButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(0.5),
  right: theme.spacing(1),
  textDecoration: "underline",
}));
