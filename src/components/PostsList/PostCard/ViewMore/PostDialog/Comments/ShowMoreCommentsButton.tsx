import { Box, Typography } from "@mui/material";
import { LoadCommentsButton } from "./styles";

interface ShowMoreCommentsButtonProps {
  fetchNextComments: () => void;
  isLoading: boolean;
}
export const ShowMoreCommentsButton = ({
  isLoading,
  fetchNextComments,
}: ShowMoreCommentsButtonProps) => {
  return (
    <Box textAlign="end">
      {isLoading ? (
        <Typography color="primary">Loading...</Typography>
      ) : (
        <LoadCommentsButton color="info" onClick={() => fetchNextComments()}>
          Show More Comments
        </LoadCommentsButton>
      )}
    </Box>
  );
};
