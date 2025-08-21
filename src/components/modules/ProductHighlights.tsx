"use client";

import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  href: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Gaming Laptop",
    image: "https://i.ibb.co.com/7J4BtvW4/msi-titan-18-hx-r2s9.jpg",
    price: "$1,299",
    href: "/products/1",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    image: "https://i.ibb.co.com/ynhLbnP9/download.webp",
    price: "$129",
    href: "/products/2",
  },
  {
    id: 3,
    name: "Wireless Mouse",
    image: "https://i.ibb.co.com/g5dCD4x/71l-Noj-Ho-q-L.jpg",
    price: "$59",
    href: "/products/3",
  },
  {
    id: 4,
    name: "High-Performance Monitor",
    image: "https://i.ibb.co.com/Q7zNZ28C/Xiaomi-gaming-monitor.jpg",
    price: "$399",
    href: "/products/4",
  },
  {
    id: 5,
    name: "Gaming Headset",
    image: "https://i.ibb.co.com/ZR16dvhC/Mechanical-Keyboard-Guide-Gear-Getty-Images-1313504623.webphttps://i.ibb.co.com/twfjGRHz/wireless-gamingheadphone-1709285565802-1709285566781.webp",
    price: "$89",
    href: "/products/5",
  },
  {
    id: 6,
    name: "External SSD 1TB",
    image: "https://i.ibb.co.com/q3DjMxHJ/a899e921-735e-4ca7-bd36-86c6bb6ecd95-CR0-0-1920-1920-SX375-SY375.jpg",
    price: "$149",
    href: "/products/6",
  },
  {
    id: 7,
    name: "RGB Gaming Chair",
    image: "https://i.ibb.co.com/v4Z0qq6v/MM-U-OCH-MLD-CYAN-BK.webp",
    price: "$299",
    href: "/products/7",
  },
  {
    id: 8,
    name: "High-Speed Router",
    image: "https://i.ibb.co.com/Wv4BT4sR/AX3000-Wireless-Dual-Band-Wi-Fi6-1200x1200.webp",
    price: "$199",
    href: "/products/8",
  },
];


const ProductHighlights = () => {
  return (
    <section className="py-16 ">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Featured Products
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12">
          Explore our top-selling computer products and gadgets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="px-4 pt-4 pb-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-red-600 dark:text-red-400 font-semibold text-lg mb-2">
                  {product.price}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Premium quality, high performance, and reliable tech gear.
                </p>
                <button
                  onClick={() => (window.location.href = product.href)}
                  className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Buy Now
                </button>
              </div>

              {/* Floating Badge Example */}
              <div className="absolute top-4 right-4 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm shadow-md">
                Hot
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
