# React/Next.js/TypeScript Developer Assessment

## Time Limit: 30 Minutes

## Overview
Build a **Product Search & Filter** application that demonstrates your understanding of React, Next.js, and TypeScript fundamentals.

---

## Assessment Structure

### Part 1: Setup & Data Types (5 minutes)

**Task 1.1: Define TypeScript Types**
- Create a `types/product.ts` file
- Define a `Product` interface with:
  - `id: number`
  - `name: string`
  - `category: string`
  - `price: number`
  - `inStock: boolean`

**Task 1.2: Create Mock Data**
- Create a `data/products.ts` file
- Add at least 8 products across 3 different categories (e.g., Electronics, Clothing, Books)
- Ensure proper TypeScript typing

---

### Part 2: Core Functionality (15 minutes)

**Task 2.1: Product List Component**
- Create a `components/product-card.tsx` component
- Display: product name, category, price (formatted as currency), and stock status
- Use proper TypeScript props typing
- Apply basic styling for readability

**Task 2.2: Search Functionality**
- Add a search input field
- Filter products by name (case-insensitive)
- Update results in real-time as user types
- Use appropriate React hooks

**Task 2.3: Category Filter**
- Add a dropdown/select element for category filtering
- Include an "All Categories" option
- Combine with search filter (both should work together)

**Task 2.4: Main Page Implementation**
- Implement all functionality in `app/page.tsx`
- Display filtered products in a responsive grid
- Manage state for search term and selected category

---

### Part 3: Polish & Best Practices (10 minutes)

**Task 3.1: TypeScript Quality**
- Ensure NO `any` types are used
- Properly type all functions, props, and state
- Use type inference where appropriate

**Task 3.2: Performance Optimization**
- Use `useMemo` to optimize filtering logic
- Prevent unnecessary re-renders

**Task 3.3: User Experience**
- Add a product count display (e.g., "Showing 5 of 8 products")
- Show a message when no products match the filters
- Ensure responsive layout (mobile and desktop)

---

## Bonus Features (If Time Permits)
- Sort products by price (ascending/descending)
- Add a "Clear Filters" button
- Implement price range filter
- Add loading states or animations
- Display out-of-stock items differently (e.g., grayed out)

---

## Evaluation Criteria

### TypeScript Proficiency (30%)
- Proper use of interfaces/types
- No `any` types
- Correct typing of props, state, and functions
- Type safety throughout the application

### React Fundamentals (30%)
- Appropriate use of hooks (useState, useMemo, etc.)
- Component composition and reusability
- Proper state management
- Efficient re-rendering

### Next.js Knowledge (20%)
- Correct file structure (App Router)
- Understanding of client vs server components
- Proper use of Next.js conventions

### Code Quality (20%)
- Clean, readable code
- Proper naming conventions
- Code organization
- Comments where necessary

---

## Submission Requirements

1. Ensure the application runs without errors: `npm run dev`
2. All TypeScript compilation should pass: `npm run build`
3. Include this completed checklist:

### Completion Checklist
- [ ] Product type interface created
- [ ] Mock data with 8+ products
- [ ] Product card component with proper typing
- [ ] Search functionality working
- [ ] Category filter working
- [ ] Both filters work together
- [ ] Product count displayed
- [ ] Empty state message
- [ ] Responsive layout
- [ ] No TypeScript errors
- [ ] No `any` types used
- [ ] Performance optimizations applied

---

## Getting Started

1. Review the starter code provided
2. Read through all requirements before starting
3. Focus on functionality first, then polish
4. Test your filters work correctly together
5. Ensure TypeScript compilation passes

**Good luck!**
