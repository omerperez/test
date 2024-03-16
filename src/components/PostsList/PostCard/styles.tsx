import { Box, Checkbox, Skeleton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PostCardWrapper = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(4),
}));

interface PostCardContainerProps {
  active: boolean;
}

export const PostCardContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<PostCardContainerProps>(
  ({ theme: { spacing, shape, palette }, active = false }) => ({
    display: "flex",
    alignItems: "center",
    gap: spacing(1),
    margin: spacing(1),
    padding: spacing(2),
    borderRadius: shape.borderRadius,
    backgroundColor: palette.secondary.main,
    color: active ? palette.primary.main : palette.text.primary,
    border: "solid 1px",
    borderColor: active ? palette.primary.main : palette.secondary.main,
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    position: "relative",
  }),
);

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const PostTitle = styled(Typography)({
  fontWeight: "bold",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const ViewMoreSkeleton = styled(Skeleton)(({ theme }) => ({
  bottom: theme.spacing(0.5),
  right: theme.spacing(1),
  position: "absolute",
  width: 70,
  height: 32,
}));
