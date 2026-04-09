import { pool } from "@/lib/db";
// import { products } from "@/data/products";

export async function GET() {
  // try {
  //   for (const product of products) {
  //     await pool.query(`
  //       INSERT INTO products (
  //         name,
  //         description,
  //         price,
  //         image,
  //         category,
  //         is_popular
  //       )
  //       VALUES (
  //         ${product.name},
  //         ${product.description},
  //         ${product.price},
  //         ${product.image},
  //         ${product.category},
  //         ${product.is_popular}
  //       );
  //     `);
  //   }

  //   return Response.json({ message: "Products seeded" });
  // } catch (error) {
  //   console.error(error);
  //   return Response.json({ error: "Seed failed" }, { status: 500 });
  // }
}