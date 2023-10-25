import Product from '@/components/Product'
import React from 'react'
import { products } from '../page'

type Props = {}


const Products = (props: Props) => {
  return (
    <main className='bg-gray-100 py-8'>
      <section className='w-[80%] mx-auto text-black grid grid-cols-5 gap-4 place-items-center'>
        {/* Map through the products array and render a Product component for each product */}
        {products.map((product)=>{
          return(
            <Product key={product.id} product={product}/>
          )
        })}
      </section>
    </main>
  )
}

export default Products