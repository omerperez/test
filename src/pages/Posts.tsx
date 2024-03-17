import { Alert } from "@/components/Alert";
import { Loading } from "@/components/Loading";
import { PostsList } from "@/components/PostsList";
import {
  DEFAULT_POSTS_LIMIT,
  FETCHING_POSTS_ERROR_MESSAGE,
  QUERY_KEYS,
} from "@/constants";
import { useVirtualGrid } from "@/hooks";
import { postsApi } from "@/services/api";
import { usePostsStore } from "@/stores";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";

interface PostQueryParams {
  pageParam: number;
}

export const Posts = () => {
  const { gridColumnCount } = useVirtualGrid();
  const { lastUpdateDate } = usePostsStore();

  const fetchPosts = async ({ pageParam }: PostQueryParams) => {
    const { data: posts, total } = await postsApi.getPosts({
      start: pageParam,
      gridColumnCount,
    });

    const promises = posts.map(({ id: postId }) =>
      postsApi.getCommentsByPostId({ postId })
    );
    const comments = await Promise.all(promises);

    return {
      posts: posts.map((post, index) => ({
        ...post,
        commentsCount: comments[index].total ?? 0,
      })),
      total,
    };
  };

  const { data, fetchNextPage, refetch, status, isRefetching } =
    useInfiniteQuery({
      queryKey: [QUERY_KEYS.POSTS],
      queryFn: fetchPosts,
      initialPageParam: 0,
      getNextPageParam: ({ total }, pages) => {
        const totalLoadedPages = pages.length;
        const initialPostsLoadCount = gridColumnCount * DEFAULT_POSTS_LIMIT;
        const totalLoadedPostsCount =
          (totalLoadedPages - 1) * DEFAULT_POSTS_LIMIT + initialPostsLoadCount;

        return totalLoadedPostsCount < total
          ? totalLoadedPostsCount
          : undefined;
      },
    });

  const loadMotePosts = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  useEffect(() => {
    refetch();
  }, [lastUpdateDate]);

  if (status === "pending") {
    return <Loading />;
  }

  if (isRefetching) {
    return <Loading text="Refreshing..." />;
  }

  if (status === "error") {
    return <Alert severity="error" text={FETCHING_POSTS_ERROR_MESSAGE} />;
  }

  const { pages } = data;

  return (
    <PostsList
      loadMorePosts={loadMotePosts}
      total={pages[pages.length - 1].total}
      posts={pages.map(({ posts }) => posts).flat()}
    />
  );
};
