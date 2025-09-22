import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Laptop", categoryId: 1 },
  { id: 2, name: "T-Shirt", categoryId: 2 },
  { id: 3, name: "Novel", categoryId: 3 },
  { id: 4, name: "Sofa", categoryId: 4 },
  { id: 5, name: "Action Figure", categoryId: 5 },
  { id: 6, name: "Football", categoryId: 6 },
];

export async function GET() {
  return NextResponse.json(products);
}
