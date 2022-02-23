import { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import ContentEditor from "./ContentEditor";
import ContentPreview from "./ContentPreview";
import { getInterests } from "../../redux/actions/interestActions";

export default function CVEditor() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getInterests());
  }, []);

  return (
    <Container>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={4}>
          <ContentEditor />
        </Grid>
        <Grid item xs={8}>
          <ContentPreview />
        </Grid>
      </Grid>
    </Container>

  );
}
