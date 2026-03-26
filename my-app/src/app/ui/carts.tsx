"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const Carts = () => {
  const router = useRouter()

  return (
    <div onClick={() => router.push("./cart")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 cursor-pointer text-text"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"/>
    </svg>
    </div>
  )
}

export default Carts
