import { useVirtualGrid } from "@/hooks";
import { Post } from "@/types";
import { Typography } from "@mui/material";
import { FixedSizeGrid as Grid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { PostCard } from "./PostCard";
import { memo } from "react";

interface PostsListProps {
  posts: Post[];
  total: number;
  loadMorePosts: () => void;
}

export const PostsList = memo(
  ({ posts, total, loadMorePosts }: PostsListProps) => {
    const {
      virtualGridWidth,
      virtualGridHeight,
      gridColumnCount,
      transformGridItemsRenderedPropsToList,
    } = useVirtualGrid();

    if (posts.length === 0) {
      return (
        <Typography variant="h4" align="center" mt={5}>
          No Results...
        </Typography>
      );
    }

    const isItemLoaded = (index: number) => index < posts.length;

    const rowCount = Math.ceil(posts.length / gridColumnCount);

    return (
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        loadMoreItems={loadMorePosts}
        itemCount={total}
      >
        {({ onItemsRendered, ref }) => (
          <Grid
            width={virtualGridWidth}
            height={virtualGridHeight}
            columnCount={gridColumnCount}
            rowCount={rowCount}
            columnWidth={virtualGridWidth / gridColumnCount}
            rowHeight={Math.max(virtualGridHeight / 7, 100)}
            itemData={posts}
            style={{
              marginTop: 10,
              overflowY: "scroll",
              overflowX: "hidden",
            }}
            onItemsRendered={(props) =>
              onItemsRendered(
                transformGridItemsRenderedPropsToList(props, total)
              )
            }
            ref={ref}
          >
            {PostCard}
          </Grid>
        )}
      </InfiniteLoader>
    );
  }
);
