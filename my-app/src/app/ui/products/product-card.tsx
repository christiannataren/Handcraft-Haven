"use client";

import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import Rating from "./rating";
import { StoreNameCard } from "./store-name";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {

  const router = useRouter();
  const [isAdding, setIsAdding] = useState(false)
  
 const addToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();

    setIsAdding(true);

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          product_id: product.id
        })
      });

      let data;
      try {
        data = await response.json();
      } catch (err) {
        alert("Invalid server response");
        return;
      }

      if (!response.ok || !data.success) {
        alert(data.message || "Failed to add to cart");
        return;
      }

      alert("Added to cart 🛒");

    } catch (error) {
      console.error("Cart error:", error);
      alert("Error adding to cart");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <li className="bg-white rounded-lg shadow-2xl overflow-auto hover:scale-103 transition-all duration-500 cursor-pointer"
    onClick={() => router.push(`/products/${product.url}`)}>
      <Image src={product.image} alt={`photo of ${product.name}`} width={100} height={100} 
      className="w-full h-50 max-sm:h-30 max-lg:h-35" />
      <div className="p-2">
        {/* <p className='text-sm my-2'>{product.category}</p> */}
        <h3 className="font-semibold text-xs sm:text-sm my-2">{product.name}</h3>
        <p>${product.price}</p>

       <div className="flex justify-between items-center">
        <Rating product={product} />

         <button className="bg-amber-700 text-white p-2 max-sm:p-1 rounded-full my-2 disabled:opacity-50 
         disabled:cursor-not-allowed" disabled={isAdding} onClick={(e) => addToCart(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 max-sm:h-[15px] max-sm:w-[15px]"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"/>
            </svg>
          </button>
       </div>
      </div>
    </li>
  );
}
