"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

const AddProductPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Omit<Product, "id">>({
    name: "",
    description: "",
    image: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Generate numeric ID
      const productWithId = { id: Date.now(), ...product };

      const res = await fetch("http://localhost:3000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productWithId),
      });

      if (!res.ok) throw new Error("Failed to add product");

      Swal.fire({
        title: "Success!",
        text: "Product added successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/dashboard");
      });
    } catch (error) {
      Swal.fire({
        title: {error},
        text: "Failed to add product",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
        <button
          type="submit"
         className="w-full  py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
