import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LoadingAnimationContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
});

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const LoadingDot = styled(Box)({
  width: 30,
  height: 30,
  backgroundColor: "#6941C6",
  borderRadius: "50%",
  display: "inline-block",
  animation: "moveAndChangeColor 1.5s infinite linear alternate",

  "&:nth-of-type(2)": {
    animationDelay: "0.25s",
  },

  "&:nth-of-type(3)": {
    animationDelay: "0.5s",
  },

  "@keyframes moveAndChangeColor": {
    "0%, 100%": {
      transform: "translateY(0)",
      backgroundColor: "#A086DE",
    },
    "25%, 75%": {
      transform: "translateY(-20px)",
      backgroundColor: "#825FD5",
    },
  },
});
