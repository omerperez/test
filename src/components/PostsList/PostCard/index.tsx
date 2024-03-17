import { QUERY_KEYS } from "@/constants";
import { useVirtualGrid } from "@/hooks";
import { usePostsStore } from "@/stores";
import { Post } from "@/types";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import { Box, Skeleton, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { Fragment, memo, useEffect, useState, useTransition } from "react";
import { GridChildComponentProps } from "react-window";
import { ViewMore } from "./ViewMore";
import {
  CustomCheckbox,
  PostCardContainer,
  PostCardWrapper,
  PostTitle,
  ViewMoreSkeleton,
} from "./styles";

type PostCardProps = GridChildComponentProps<Post[]>;

export const PostCard = memo(
  ({ rowIndex, columnIndex, data, style }: PostCardProps) => {
    const { gridColumnCount } = useVirtualGrid();
    const { selectedPosts, setSelectedPosts, selectAll } = usePostsStore();
    const [_isPending, startTransition] = useTransition();

    const postIndex = rowIndex * gridColumnCount + columnIndex;
    const post = data[postIndex];

    const [checked, setChecked] = useState<boolean>(
      (post && selectedPosts.has(post.id)) || selectAll
    );

    const client = useQueryClient();
    const totalPostsCount =
      client.getQueryData<number>([QUERY_KEYS.TOTAL_POSTS_COUNT]) ?? 0;

    if (postIndex >= totalPostsCount) {
      return null;
    }

    useEffect(() => {
      if (selectAll) {
        setChecked(true);
      } else if (post) {
        setChecked(selectedPosts.has(post.id));
      }
    }, [selectAll, post, selectedPosts]);

    const onCheckClick = () => {
      setChecked((prevState) => !prevState);
      startTransition(() => {
        setSelectedPosts(post.id);
      });
    };

    return (
      <PostCardWrapper sx={style}>
        <PostCardContainer active={checked}>
          <CustomCheckbox onChange={onCheckClick} checked={checked} />
          <Box overflow="hidden">
            {post ? (
              <Fragment>
                <PostTitle>{capitalizeFirstLetter(post.title)}</PostTitle>
                <Typography variant="subtitle1">
                  {`${post.commentsCount} comments`}
                </Typography>
                <ViewMore post={post} />
              </Fragment>
            ) : (
              <Fragment>
                <Skeleton width={200} height={24} />
                <Skeleton width={150} height={18} />
                <ViewMoreSkeleton />
              </Fragment>
            )}
          </Box>
        </PostCardContainer>
      </PostCardWrapper>
    );
  }
);
