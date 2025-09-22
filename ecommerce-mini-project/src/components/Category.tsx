"use client";

import React, { useState } from "react";
import { useGetProductsByCategoryQuery } from "../store/api";

type CategoryProps = {
  category: {
    id: number;
    name: string;
  };
};

function Category({ category }: CategoryProps) {
  const [showProducts, setShowProducts] = useState(false);
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(category.id, { skip: !showProducts });

  return (
    <div>
      <span
        style={{
          cursor: "pointer",
          color: "blue",
          textDecoration: "underline",
        }}
        onClick={() => setShowProducts((prev) => !prev)}
      >
        {category.name}
      </span>
      {showProducts && (
        <div style={{ marginTop: 8 }}>
          {isLoading && <div>Loading products...</div>}
          {error && <div>Error loading products</div>}
          {Array.isArray(products) && products.length > 0 ? (
            <ul>
              {products.map((product: any) => (
                <li key={product.id}>{product.title}</li>
              ))}
            </ul>
          ) : (
            !isLoading && <div>No products found.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Category;
