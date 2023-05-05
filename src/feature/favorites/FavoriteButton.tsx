import { FC, useCallback } from "react";
import { IconButton, SxProps, Theme } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavoriteForId } from "./hook";

export const FavoriteButton: FC<{ sx?: SxProps<Theme>; postId: number }> = ({ sx, postId }) => {
  const [some, handleFavorites] = useFavoriteForId(postId);
  const onClickFavorites = useCallback(() => handleFavorites(postId), [postId, handleFavorites]);
  return (
    <IconButton sx={sx} onClick={onClickFavorites}>
      <FavoriteIcon sx={{ fill: some ? "red" : "" }} />
    </IconButton>
  );
};
