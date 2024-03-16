import { DialogContent, DialogTitle, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomDialogTitle = styled(DialogTitle)({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: 0,
});

export const CustomIconButton = styled(IconButton)({
  height: 40,
  width: 40,
});

export const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));
