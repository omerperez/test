import { Comment } from "@/types";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

interface CommentsRowsProps {
  comments: Comment[];
}

export const CommentsRows = ({ comments }: CommentsRowsProps) => {
  return (
    <Fragment>
      {comments.map((comment) => (
        <Box key={`comment-${comment.id}`}>
          <Typography fontSize={12} color="gray">
            {comment.id} | {comment.postId}
          </Typography>
          <Typography fontSize={14}>
            {capitalizeFirstLetter(comment.body)}
          </Typography>
        </Box>
      ))}
    </Fragment>
  );
};
