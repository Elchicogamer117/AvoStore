import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const ProductItem = () => {
  const {query: { productID } } = useRouter()
  const [avo, setAvo] = useState<TProduct>()

  useEffect(() => {
    productID && window.fetch(`/api/avo/${productID}`)
      .then(res => res.json())
      .then(res  => setAvo(res))
      .catch(error => console.error(error))
  }, [productID])
  

  return (
    <section>
    <h1> Product page: {avo?.name} </h1>
    <h4> {avo?.attributes.description} </h4>

    </section>
  )


}

export default ProductItem