import { Container, Grid } from "@mui/material";

import ContentEditor from "./ContentEditor";
import ContentPreview from "./ContentPreview";

export default function CVEditor() {
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
