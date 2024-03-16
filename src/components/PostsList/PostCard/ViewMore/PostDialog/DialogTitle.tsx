import { Close } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { CustomDialogTitle, CustomIconButton } from "./styles";

interface DialogTitleProps {
  children: string;
  onClose: () => void;
}

export const DialogTitle = ({ children, onClose }: DialogTitleProps) => (
  <CustomDialogTitle>
    <Box>
      <Typography fontSize={24}>{children}</Typography>
    </Box>
    <CustomIconButton color="error" onClick={onClose}>
      <Close />
    </CustomIconButton>
  </CustomDialogTitle>
);
