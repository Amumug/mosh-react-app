import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductList = () => {
  const [users, setUsers] = useState([])
  useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => console.log(res))
  })
  return (
    <div></div>
  )
}

export default ProductList