import React from 'react'
import { Product } from './InterfaceProduct'

interface Props {
    product: Product
   // describtion:Product
  producto:Product[]
   setProducto:  React.Dispatch<React.SetStateAction<Product[]>>;
}

const SingleProduct = ({product, setProducto}:Props) => {
  return (
    <form> <span>
{/* <li key={product.id}>{product.product} - {product.description}</li> */}
</span>
    </form>
  )
}

export default SingleProduct