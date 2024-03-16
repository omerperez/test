import { usePostsStore } from "@/stores";
import { DoneAll, RemoveDone } from "@mui/icons-material";
import { Button } from "@mui/material";

export const SelectAllPostsButton = () => {
  const { selectAll, selectedPosts, toggleSelectAll } = usePostsStore();

  const selectAllStatus = selectedPosts.size === 0 && selectAll;
  return (
    <Button
      variant="contained"
      color={selectAllStatus ? "error" : "success"}
      startIcon={selectAllStatus ? <RemoveDone /> : <DoneAll />}
      onClick={toggleSelectAll}
    >
      {selectAllStatus ? "Deselect all" : "Select all"}
    </Button>
  );
};
