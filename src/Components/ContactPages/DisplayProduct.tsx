import React from 'react'
import { Product } from './InterfaceProduct';


interface ProductListProps {
    producto: Product[];
    setProducto: React.Dispatch<React.SetStateAction<Product[]>>;
  }

const DisplayProduct:React.FC<ProductListProps> = ({producto,setProducto}: ProductListProps) => {
  return (
    <div>

        {producto.map((product=>(
           <li>{product.product} - {product.description}</li>
        )))}



    </div>
  )
}

export default DisplayProduct