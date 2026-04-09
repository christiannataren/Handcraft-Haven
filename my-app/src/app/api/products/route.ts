// src/app/api/products/route.ts
import { pool } from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT *
      FROM products
      ORDER BY id ASC;
    `);

    return Response.json(result.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    return Response.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}