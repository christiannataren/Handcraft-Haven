"use client"

import React from 'react'
import Link from 'next/link'

const NavLink = ({ sideBar, setSideBar }) => {
  const links = [
    { name: "Home", href: "/", },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ]

  return (
    <div className={`flex items-center gap-5 text-xs sm:text-sm max-lg:fixed top-0 left-0 max-lg:flex-col
    max-lg:h-full max-lg:bg-white max-lg:text-black max-lg:items-start transition-all duration-300 max-lg:gap-2
    ${!sideBar ? "w-0 max-lg:overflow-hidden" : "w-60 max-lg:pl-6 max-lg:pt-5"}`}>
      <button className='font-bold text-red-700 text-xl lg:hidden' onClick={() => setSideBar(false)}>X</button>
      {links.map((link, index) => (
        <Link key={index} href={link.href} className='active:max-lg:bg-gray-300 max-lg:w-full max-lg:p-2 
        max-lg:rounded' onClick={() => setSideBar(false)}>
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default NavLink