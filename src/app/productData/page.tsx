"use client"

import { createContext, useContext, useState, ReactNode } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import Image from "next/image";

// Define types
type Product = {
  imageUrl: string;
  _id: string;
  name: string;
  description: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
};

// Create Cart Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.product._id === product._id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Use Cart Hook
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Home Component
const allProductsQuery = `*[_type == "product"]{
  _id,
  name,
  description,
  price,
  "imageUrl": image.asset->url
}`;

export default async function Home() {
  const products: Product[] = await sanityFetch(allProductsQuery);

  return (
    <CartProvider>
      <div className="p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <p className="text-lg font-bold text-blue-500">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => useCart().addToCart(product)} // Add to Cart button
                className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </CartProvider>
  );
}
