import { NextResponse } from "next/server";

const categories = [
  { id: 1, name: "Electronics", slug: "electronics" },
  { id: 2, name: "Clothing", slug: "clothing" },
  { id: 3, name: "Books", slug: "books" },
  { id: 4, name: "Home", slug: "home" },
  { id: 5, name: "Toys", slug: "toys" },
  { id: 6, name: "Sports", slug: "sports" },
];

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const category = categories.find((cat) => cat.slug === slug);
  if (!category) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }
  return NextResponse.json(category);
}
