"use client";
import React from "react";
import Category from "./Category";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useGetCategoriesQuery } from "@/services/api";

type CategoryType = {
  slug: string;
  name: string;
};
function Categories() {
  const { data, isError, isLoading } = useGetCategoriesQuery(null);
  console.log(data?.slice(0, 6));

  return (
    <>
      <Container maxWidth={"lg"} sx={{ mt: 6 }}>
        {isLoading && <Typography>Loading...</Typography>}
        {isError && <Typography>Error occured.</Typography>}
        <Grid container spacing={2}>
          {
          // Array.isArray(data) &&
            data?.slice(0, 6).map((category: CategoryType, index: number) => {
              return (
                <React.Fragment key={index}>
                  <Category category={category} />
                </React.Fragment>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}

export default Categories;
