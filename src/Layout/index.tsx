import { Header } from "@/components/Header";
import { theme } from "@/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { ReactElement } from "react";
import { LayoutWrapper } from "./styles";

interface LayoutProps {
  children: ReactElement;
}

export const Layout = ({ children }: LayoutProps) => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <CssBaseline />
    <LayoutWrapper component="main">
      <Header />
      {children}
    </LayoutWrapper>
  </ThemeProvider>
);
