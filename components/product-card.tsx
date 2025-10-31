import { type Product } from '@/types/product'

type ProductCardProps = {
  product: Product
}

export function ProductCard(props: ProductCardProps) {
  const { product } = props
  // TODO: Implement your component

  return (
    <>
      <div className='rounded-md bg-white shadow p-4 text-gray-800'>
        <div className='p-2 flex flex-col gap-2'>
          <p className='text-lg font-bold'>{product.name}</p>

          <p className='text-md font-semibold'>{product.category}</p>
        </div>

        <div className='mt-2 p-2'>
          <p className='mt-4 p-2 text-green-800'>${product.price.toFixed(2)}</p>

          <p className='mt-4 p-2 text-red-800'>{product.inStock ? "In stock" : "Out of stock"}</p>
        </div>
      </div>
    </>
  )
}
