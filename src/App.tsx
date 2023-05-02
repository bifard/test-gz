import { Grid, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { api } from "./shared/service";
import { useDebounce } from "./shared/hooks/use-debounce";
import { useFetch } from "./shared/hooks/use-fetch/use-fetch";

function App() {
  const [value, setValue] = useState("");
  const debVal = useDebounce(value);
  const handleChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);
  const [data] = useFetch(api.getPosts, [debVal || ""]);
  return (
    <Grid container flexDirection={"column"} width={"100%"}>
      <TextField
        size="small"
        label="search"
        value={value}
        onChange={handleChangeSearch}
        fullWidth
        sx={{ maxWidth: 500, margin: "0 auto" }}
      />
      <>{data && data.map((post) => <Typography>{post.title}</Typography>)}</>
    </Grid>
  );
}

export default App;
