import { AlertProps as MuiAlertProps } from "@mui/material";
import { CustomAlert } from "./styles";

export type AlertProps = MuiAlertProps & {
  text: string;
};

const Alert = ({ text, ...alertProps }: AlertProps) => (
  <CustomAlert {...alertProps}>{text}</CustomAlert>
);

export { Alert };
