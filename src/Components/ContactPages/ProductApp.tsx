import React, { useState } from "react";
import { Product } from "./InterfaceProduct";
import InputProduct from "./InputProduct";
import DisplayProduct from "./DisplayProduct";

const ProductApp: React.FC = () => {
  const [product, setProduct] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [producto, setProducto] = useState<Product[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product && description) {
      setProducto([...producto, { id: Date.now(), product, description, isDone: false }]);
      setProduct("");
      setDescription("");
      console.log(producto);
    }
    else{
      
    alert("Enter Valid Data");
    }
  };
  

  return (
    <div>
      <span> Product App </span>
      <InputProduct
        product={product}
        description={description}
        setDescription={setDescription}
        setProduct={setProduct}
        handleAdd={handleAdd}
      />
      <DisplayProduct producto={producto} setProducto={setProducto} />
    </div>
  );
}

export default ProductApp;
