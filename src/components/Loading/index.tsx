import { DEFAULT_LOADING_TEXT } from "@/constants";
import { Typography } from "@mui/material";
import {
  LoadingAnimationContainer,
  LoadingContainer,
  LoadingDot,
} from "./styles";

interface LoadingProps {
  text?: string;
}
export const Loading = ({ text = DEFAULT_LOADING_TEXT }: LoadingProps) => (
  <LoadingAnimationContainer>
    <LoadingContainer>
      <LoadingDot />
      <LoadingDot />
      <LoadingDot />
    </LoadingContainer>
    <Typography component="div" fontSize={24}>
      {text}
    </Typography>
  </LoadingAnimationContainer>
);
