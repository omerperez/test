import { HEX_OPACITY_10_CODE } from "@/constants";
import { Box, Skeleton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SelectedPostsTextWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.5),
  borderRadius: 32,
  backgroundColor: theme.palette.secondary.main,
}));

export const SelectedText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
  fontSize: 12,
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: 10,
  },
}));

export const SelectedPostsTextSkeleton = styled(Skeleton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main + HEX_OPACITY_10_CODE,
  width: 150,
  height: 22,
  [theme.breakpoints.between("xs", "sm")]: {
    width: 100,
    height: 18,
  },
}));
