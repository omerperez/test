import { Post } from "@/types";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import { Dialog, Typography } from "@mui/material";
import { Comments } from "./Comments";
import { DialogTitle } from "./DialogTitle";
import { UserDetails } from "./UserDetails";
import { CustomDialogContent } from "./styles";

interface PostDialogProps {
  open: boolean;
  onClose: () => void;
  post: Post;
}

export const PostDialog = ({ open, onClose, post }: PostDialogProps) => (
  <Dialog onClose={onClose} open={open} fullWidth maxWidth="md">
    <DialogTitle onClose={onClose}>
      {capitalizeFirstLetter(post.title)}
    </DialogTitle>
    <CustomDialogContent>
      <UserDetails userId={post.userId} />
      <Typography>{capitalizeFirstLetter(post.body)}</Typography>
      <Comments postId={post.id} commentsCount={post.commentsCount} />
    </CustomDialogContent>
  </Dialog>
);
