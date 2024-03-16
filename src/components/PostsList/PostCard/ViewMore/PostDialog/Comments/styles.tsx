import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CommentsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  maxHeight: 300,
  overflowY: "scroll",
  overflowX: "hidden",
  padding: theme.spacing(1, 2),
  backgroundColor: theme.palette.secondary.main,
}));

export const CommentsTitle = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1, 2),
  color: theme.palette.background.default,
}));

export const LoadCommentsButton = styled(Button)({
  textDecoration: "underline",
});
