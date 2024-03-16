import { useDialog } from "@/hooks";
import { Post } from "@/types";
import { Fragment } from "react/jsx-runtime";
import { PostDialog } from "./PostDialog";
import { ViewMoreButton } from "./styles";

interface ViewMoreProps {
  post: Post;
}

export const ViewMore = ({ post }: ViewMoreProps) => {
  const { open, onOpen, onClose } = useDialog();

  return (
    <Fragment>
      <ViewMoreButton onClick={onOpen} color="primary">
        View More
      </ViewMoreButton>
      <PostDialog onClose={onClose} open={open} post={post} />
    </Fragment>
  );
};
