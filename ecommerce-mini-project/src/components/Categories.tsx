import React from "react";
import Category from "./Category";
import { Box, Container, Grid } from "@mui/material";

function Categories() {
  return (
    <>
      <Container maxWidth={"lg"} sx={{ mt: 6 }}>
        <Grid container spacing={2}>
          <Grid size={{xs: 12, sm: 6, md: 2}} sx={{background: "hotpink"}}>
            <Category />
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 2}} sx={{background: "hotpink"}}>
            <Category />
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 2}} sx={{background: "hotpink"}}>
            <Category />
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 2}} sx={{background: "hotpink"}}>
            <Category />
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 2}} sx={{background: "hotpink"}}>
            <Category />
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 2}} sx={{background: "hotpink"}}>
            <Category />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Categories;
