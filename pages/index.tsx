import React, { useEffect, useState } from 'react'
import Nabvar from '../components/Navbar/Nabvar'

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window.fetch('api/avo/')
      .then(res => res.json())
      .then(({ data, length }) => setProductList(data))
      .catch(error => console.error(error))
  },[])
  
  return (
    <section>
      <Nabvar />
      {productList.map((product) => (
        <ul>{product.name}</ul>
      ))}
    </section>
  )
}

export default Home