import { useState } from "react";

export const useDialog = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return {
    open,
    onOpen,
    onClose,
  };
};
