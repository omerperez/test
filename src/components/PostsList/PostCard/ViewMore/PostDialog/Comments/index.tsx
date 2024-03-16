import { Alert } from "@/components/Alert";
import { Loading } from "@/components/Loading";
import {
  DEFAULT_COMMENTS_LIMIT,
  FETCHING_COMMENTS_ERROR_MESSAGE,
  QUERY_KEYS,
} from "@/constants";
import { postsApi } from "@/services/api";
import { Comment } from "@/types";
import { Box } from "@mui/material";
import { QueryFunction, useInfiniteQuery } from "@tanstack/react-query";
import { CommentsRows } from "./CommentsRows";
import { ShowMoreCommentsButton } from "./ShowMoreCommentsButton";
import { CommentsContainer, CommentsTitle } from "./styles";

type CommentsQueryKey = [string, number];

interface CommentsProps {
  postId: number;
  commentsCount: number;
}

export const Comments = ({ postId, commentsCount }: CommentsProps) => {
  const fetchComments: QueryFunction<
    Comment[],
    CommentsQueryKey,
    number
  > = async (params) => {
    const [_endPoint, id] = params.queryKey as [string, number];
    const { data } = await postsApi.getCommentsByPostId({
      postId: id,
      page: params.pageParam,
      limit: DEFAULT_COMMENTS_LIMIT,
    });
    return data;
  };

  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEYS.COMMENTS, postId],
      queryFn: fetchComments,
      initialPageParam: 1,
      getNextPageParam: (_lastPage, allPages) => {
        const loadedCommentsCount = allPages.length * DEFAULT_COMMENTS_LIMIT;
        if (loadedCommentsCount < commentsCount) {
          return allPages.length + 1;
        }
        return undefined;
      },
    });

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "error") {
    return <Alert severity="error" text={FETCHING_COMMENTS_ERROR_MESSAGE} />;
  }

  return (
    <Box>
      <CommentsTitle>Post comments</CommentsTitle>
      <CommentsContainer>
        <CommentsRows comments={data.pages.flat()} />
        {hasNextPage && (
          <ShowMoreCommentsButton
            isLoading={isFetchingNextPage}
            fetchNextComments={fetchNextPage}
          />
        )}
      </CommentsContainer>
    </Box>
  );
};
