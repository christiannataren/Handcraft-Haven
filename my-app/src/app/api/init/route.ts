import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        description TEXT NOT NULL,
        price NUMERIC(10,2) NOT NULL,
        image VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        is_popular BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    return NextResponse.json({
      message: "Products table created successfully",
    });
  } catch (error) {
    console.error("Error creating products table:", error);
    return NextResponse.json(
      { error: "Failed to create products table" },
      { status: 500 }
    );
  }
}