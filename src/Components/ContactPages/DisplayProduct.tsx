import React from "react";
import { Product } from "./InterfaceProduct";
import ProductList from "./ProductList";

interface ProductListProps {
  producto: Product[];
  setProducto: React.Dispatch<React.SetStateAction<Product[]>>;
}

const DisplayProduct: React.FC<ProductListProps> = ({
  producto,
  setProducto,
}: ProductListProps) => {
  return (
    <div>
      Product List
      {producto.map((product) => (
        <ProductList
          key={product.id}
         product={product}
          // description={description}
          producto={producto}
          setProducto={setProducto}
        />
     
      ))}
    </div>
  );
};

export default DisplayProduct;
