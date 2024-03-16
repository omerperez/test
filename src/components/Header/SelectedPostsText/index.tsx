import { QUERY_KEYS } from "@/constants";
import { postsApi } from "@/services/api";
import { usePostsStore } from "@/stores";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  SelectedPostsTextSkeleton,
  SelectedPostsTextWrapper,
  SelectedText,
} from "./styles";

export const SelectedPostsText = () => {
  const { selectedPosts, lastUpdateDate, selectAll } = usePostsStore();

  const {
    data: totalPostsCount,
    status,
    refetch,
    isRefetching,
  } = useQuery<number>({
    queryKey: [QUERY_KEYS.TOTAL_POSTS_COUNT],
    queryFn: async () => {
      return await postsApi.getTotalPostsCount();
    },
  });

  useMemo(() => {
    refetch();
  }, [lastUpdateDate]);

  if (status !== "success" || isRefetching) {
    return <SelectedPostsTextSkeleton variant="rounded" />;
  }

  const selectedPostsCount = selectAll
    ? totalPostsCount - selectedPosts.size
    : selectedPosts.size;

  return (
    <SelectedPostsTextWrapper>
      <SelectedText>
        {`${selectedPostsCount} of ${totalPostsCount} posts selected`}
      </SelectedText>
    </SelectedPostsTextWrapper>
  );
};
