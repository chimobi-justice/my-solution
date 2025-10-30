import type { Product } from "@/types/product"

// CANDIDATE: Create mock data with at least 8 products across 3 categories
// Example categories: Electronics, Clothing, Books, Home & Garden, etc.
// Ensure variety in prices and stock status

export const products: Product[] = [
  // TODO: Add your mock products here
  // Example:
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 79.99,
    inStock: true
  },
  {
    id: 2,
    name: "Smartphones",
    category: "Electronics",
    price: 49.99,
    inStock: true
  },
  {
    id: 3,
    name: "Headsets",
    category: "Electronics",
    price: 89.99,
    inStock: true
  },
  {
    id: 4,
    name: "Television",
    category: "Electronics",
    price: 29.99,
    inStock: true
  },
  {
    id: 5,
    name: "React fundamentals",
    category: "Books",
    price: 89.99,
    inStock: true
  },
  {
    id: 6,
    name: "Laptop Charger",
    category: "Electronics",
    price: 99.99,
    inStock: true
  },
  {
    id: 7,
    name: "T shirt",
    category: "clothing",
    price: 19.99,
    inStock: true
  },
  {
    id: 8,
    name: "Hoodie",
    category: "clothing",
    price: 79.09,
    inStock: true
  },
]
