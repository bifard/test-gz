import { FC, ReactNode } from "react";
import { Paper, Typography } from "@mui/material";

import { IPost } from "../shared/type";

export const PistItem: FC<IPost & { FavoriteButton?: ReactNode }> = ({ title, body, FavoriteButton }) => {
  return (
    <Paper sx={{ padding: 2 }}>
      {FavoriteButton}
      <Typography fontWeight={700} marginBottom={1}>
        {title}
      </Typography>
      <Typography>{body}</Typography>
    </Paper>
  );
};
