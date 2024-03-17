import { POSTS_PAGE_TITLE, POSTS_SUB_TITLE } from "@/constants";
import { Typography } from "@mui/material";
import { Fragment } from "react";
import { RefreshButton } from "./RefreshButton";
import { SelectAllPostsButton } from "./SelectAllPostsButton";
import { SelectedPostsText } from "./SelectedPostsText";
import {
  CustomDivider,
  FlexContainer,
  HeaderContainer,
  PageTitle,
} from "./styles";

export const Header = () => (
  <Fragment>
    <HeaderContainer>
      <FlexContainer>
        <PageTitle>{POSTS_PAGE_TITLE}</PageTitle>
        <SelectedPostsText />
      </FlexContainer>
      <FlexContainer>
        <SelectAllPostsButton />
        <RefreshButton />
      </FlexContainer>
    </HeaderContainer>
    <Typography variant="subtitle1">{POSTS_SUB_TITLE}</Typography>
    <CustomDivider />
  </Fragment>
);
