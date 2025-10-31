"use client"

import * as React from 'react'
import { products } from '@/data/products'
import { type Product } from '@/types/product'
import { ProductCard } from '@/components/product-card'

export default function Home() {
  // TODO: Add your state management here
  /**
   * FOR STATE MANAGEMENT
   * - inputValue: tracks what the user types into the search box
   * - category: tracks the currently selected category from the select dropdown
   */
  const [inputValue, setInputValue] = React.useState('')
  const [category, setCategory] = React.useState('All')



  // TODO: Implement filtering logic
  // Hint: Use useMemo for performance

  /**
   * FOR FILTERING LOGIC
   * - useMemo is used here to optimize performance so filtering only runs
   *   when inputValue or category changes.
   * - It filters products by checking:
   *   1. If the product name includes the search term (case-insensitive)
   *   2. If the selected category is "All" or matches the product category
   */
  const filteredProducts = React.useMemo(() => {
    return products.filter((product: Product) => {
      const getProducts = product.name.toLowerCase().includes(inputValue.toLowerCase().trim())
      const matchesCategory = category === 'All' || product.category === category
      return getProducts && matchesCategory
    })
  }, [inputValue, category])

  // TODO: Get unique categories from products

   /**
   * TO GET UNIQUE CATEGORIES
   * - This Extracts all product categories (eg. 'All', 'Electronics', 'Books', 'clothing')
   * - Uses a Set to remove duplicates values
   * -And Prepends "All" so users can reset the category filter
   */
  const uniqueCategories = React.useMemo(() => {
    const categories = new Set(products.map((p) => p.category))
    return ['All', ...Array.from(categories)]
  }, [])


  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold">Product Search & Filter</h1>

        {/* TODO: Add search input */}
         {/* SEARCH INPUT
            This updates inputValue state when typed/changed */}
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="search.."
          className="border-2 w-full px-3 py-2 rounded-md"
        />

        {/* TODO: Add category filter dropdown */}

        {/* CATEGORY DROPDOWN: uses select element (eg. 'All', 'Electronics', 'Books', 'clothing')
            Allows filtering products by category */}
        <div className='flex justify-start mt-5'>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-3 py-2 rounded-md mb-6"
          >
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* TODO: Display product count */}

        {/* PRODUCT COUNT
            Shows how many products match current filters (eg. 3 of 8) */}
        <p className="mb-4 text-gray-400">
          Showing {filteredProducts.length} of {products.length} products
        </p>


        {/* TODO: Display filtered products in a grid */}
         {/* PRODUCT GRID
            Displays filtered products using ProductCard component */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <>
            {/* TODO: Handle empty results */}
            {/* EMPTY STATE */}
            <p className="text-gray-400 text-center mt-10">
              No products match your search or filter.
            </p>
          </>
        )}
      </div>
    </main>
  )
}
