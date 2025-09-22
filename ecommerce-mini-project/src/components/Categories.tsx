"use client";
import React from "react";
import Category from "./Category";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useGetCategoriesQuery } from "../store/api";

function Categories() {
  const { data, error, isLoading } = useGetCategoriesQuery(undefined);

  return (
    <Container maxWidth={"lg"} sx={{ mt: 6 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Categories
      </Typography>
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">Error loading categories</Typography>}
      <Grid container columnSpacing={2} rowSpacing={2}>
        {Array.isArray(data) &&
          data.map((cat: any, idx: number) => (
            <Grid size={2} key={cat.id || idx} >
              <Category category={cat} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Categories;
