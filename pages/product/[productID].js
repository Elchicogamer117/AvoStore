import { useRouter } from 'next/router'
import React from 'react'

const ProductItem = () => {
  const {query: { productID } } = useRouter()
  // return  <div>  This is a product page: {router.query.id} 🥑 </div> //*? without destructuring
  return  <div>  This is a product page: {productID} 🥑 </div>
}

export default ProductItem