import { Box, Grid, Stack, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { FavoriteButton } from "./feature/favorites/FavoriteButton";
import { FavoritesProvider } from "./feature/favorites/context";
import { PistItem } from "./entities/PostItem";
import { api } from "./shared/service";
import { useDebounce } from "./shared/hooks/use-debounce";
import { useFetch } from "./shared/hooks/use-fetch/use-fetch";

function App() {
  const [value, setValue] = useState("");
  const debVal = useDebounce(value);
  const handleChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  const [data, _, refetch] = useFetch(api.getPosts, [{ q: value }]);
  useEffect(() => {
    refetch([{ q: debVal }]);
  }, [debVal, refetch]);

  return (
    <FavoritesProvider>
      <Grid container flexDirection={"column"} width={"100%"}>
        <TextField
          size="small"
          label="search"
          value={value}
          onChange={handleChangeSearch}
          fullWidth
          sx={{ maxWidth: 500, margin: "0 auto", marginBottom: 3 }}
        />
        <Stack direction={"column"} spacing={2} sx={{ maxWidth: 700, margin: "0 auto" }}>
          {data &&
            data.map((post) => (
              <PistItem
                key={post.id}
                {...post}
                FavoriteButton={
                  <Box sx={{ position: "relative" }}>
                    <FavoriteButton sx={{ position: "absolute", top: 0, right: 0 }} postId={post.id} />
                  </Box>
                }
              />
            ))}
        </Stack>
      </Grid>
    </FavoritesProvider>
  );
}

export default App;
