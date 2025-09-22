import { NextResponse } from "next/server";

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Books" },
  { id: 4, name: "Home" },
  { id: 5, name: "Toys" },
  { id: 6, name: "Sports" },
];

export async function GET() {
  return NextResponse.json(categories);
}
