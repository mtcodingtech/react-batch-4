import { useGetProductByCategoryQuery } from "@/services/api";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

type CategoryType = {
  name: string;
  slug: string;
  // Add other fields if needed
};

interface CategoryProps {
  category: CategoryType;
}

function Category({ category }: CategoryProps) {
  const [showProducts, setShowProducts] = useState(false);
  const { data: products, isLoading, isError } = useGetProductByCategoryQuery(category.slug, {skip: !showProducts});
  console.log("products", products)
  return (
    <>
      <Grid size={{ xs: 12, sm: 6, md: 2 }} sx={{ background: "hotpink" }}>
        <Box>
          <Typography onClick={() => setShowProducts((prev) => !prev)}>{category.name}</Typography>
          {
            showProducts && <Box>
              {isLoading && <Typography>Products Loading...</Typography>}
              {isError && <Typography>Products Error Occured</Typography>}
              {
                showProducts && products?.products?.map((product: any, index: number) => (
                  <Typography key={index}>{product.title}</Typography>
                ))
              }
            </Box>
          }
        </Box>
      </Grid>
    </>
  );
}

export default Category;
