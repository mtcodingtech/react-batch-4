import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  //   baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    // getProducts: builder.query({
    //   query: () => "products",
    // }),
    // getCategories: builder.query({
    //   query: () => "categories",
    // }),
    getProducts: builder.query({
      query: () => "/products'",
    }),
    getProductsByCategory: builder.query({
      query: (categoryId: number) => `/categories/${categoryId}/products`,
    }),
    getCategories: builder.query({
      query: () => "/categories",
    }),
    getCategoryBySlug: builder.query({
      query: (slug: string) => `categories/slug/${slug}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetCategoryBySlugQuery,
  useGetProductsByCategoryQuery,
} = api;
