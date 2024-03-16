import { QUERY_KEYS, REFRESH_BUTTON_TEXT } from "@/constants";
import { usePostsStore } from "@/stores";
import { Refresh } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";

export const RefreshButton = () => {
  const { setLastUpdateDate } = usePostsStore();
  const queryClient = useQueryClient();

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<Refresh sx={{ transform: "rotate(115deg)" }} />}
      onClick={() => {
        setLastUpdateDate();
        queryClient.removeQueries({
          queryKey: [QUERY_KEYS.POSTS],
        });
      }}
    >
      {REFRESH_BUTTON_TEXT}
    </Button>
  );
};
