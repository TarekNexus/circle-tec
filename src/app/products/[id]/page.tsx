"use client";

import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

const ProductDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const products: Product[] = [
    { id: 1, name: "Gaming Laptop", description: "High-performance laptop for gaming and productivity.", image: "https://i.ibb.co/7J4cgJDV/02naa-Ok-VLe7-DIiej-FUy-DPJp-64.webp", price: "$1,299" },
    { id: 2, name: "Mechanical Keyboard", description: "Durable and tactile keyboard with RGB lighting.", image: "/products/keyboard1.png", price: "$129" },
    { id: 3, name: "Wireless Mouse", description: "Ergonomic mouse with high precision sensor.", image: "https://i.ibb.co/bM15qj5s/images.jpg", price: "$59" },
    { id: 4, name: "High-Performance Monitor", description: "4K monitor with HDR and fast refresh rate.", image: "https://i.ibb.co/FkbfbGxz/pexels-photo-11633745.webp", price: "$399" },
    { id: 5, name: "Gaming Headset", description: "Surround sound headset for immersive gaming.", image: "https://i.ibb.co/Tq6ShPT/gaming-headset.jpg", price: "$89" },
    { id: 6, name: "External SSD 1TB", description: "Portable SSD with ultra-fast read/write speeds.", image: "https://i.ibb.co/DtV7kXc/external-ssd.jpg", price: "$149" },
    { id: 7, name: "RGB Gaming Chair", description: "Ergonomic chair with RGB lighting for gamers.", image: "https://i.ibb.co/ZVqY7Tf/gaming-chair.jpg", price: "$299" },
    { id: 8, name: "High-Speed Router", description: "Dual-band router for fast and stable internet.", image: "https://i.ibb.co/Qr9kHbC/high-speed-router.jpg", price: "$199" },
    { id: 9, name: "Webcam HD", description: "High definition webcam for streaming and meetings.", image: "https://i.ibb.co/mbTzXbB/webcam.jpg", price: "$79" },
    { id: 10, name: "Portable Projector", description: "Compact projector for movies and presentations.", image: "https://i.ibb.co/kHjd5SL/projector.jpg", price: "$229" },
    { id: 11, name: "Smartwatch", description: "Feature-packed smartwatch with health tracking.", image: "https://i.ibb.co/1LwQ8Bz/smartwatch.jpg", price: "$199" },
    { id: 12, name: "Bluetooth Speaker", description: "Portable Bluetooth speaker with powerful sound.", image: "https://i.ibb.co/9hQzBxJ/speaker.jpg", price: "$99" },
  ];

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Product not found</h2>
      </div>
    );
  }

  return (
    <section className="py-16 min-h-screen">
      <div className="w-11/12 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 h-96 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-3xl"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            {product.name}
          </h1>
          <p className="text-red-600 dark:text-red-400 font-bold text-2xl mb-4">
            {product.price}
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
            {product.description}
          </p>
          <button
            onClick={() => alert("Add to cart functionality here")}
            className="w-full md:w-48 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Buy Now
          </button>
          <button
            onClick={() => router.back()}
            className="w-full md:w-48 mt-4 py-3 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
