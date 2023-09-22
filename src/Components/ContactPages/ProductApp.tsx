import React, { useState } from "react";
import { Product } from "./InterfaceProduct";
import InputProduct from "./InputProduct";
import DisplayProduct from "./DisplayProduct";
import RemoveAllProducts from "./RemoveAllProducts";

const ProductApp: React.FC = () => {
  const [product, setProduct] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [producto, setProducto] = useState<Product[]>([]);

  const handleRemoveAllProducts = () => {
    console.log("Removing");
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Deleting All Data") === true) {
      setProducto([]);
    } else {
    }
  };

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product && description) {
      setProducto([
        ...producto,
        { id: Date.now(), product, description, isDone: false },
      ]);
      setProduct("");
      setDescription("");
      console.log(producto);
    } else {
      alert("Enter Valid Data");
    }
  };

  return (
    <div>
      <span> Product App </span>
     
      <RemoveAllProducts handleRemoveAllProducts={handleRemoveAllProducts} />
      <button>Add Random </button>
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
};

export default ProductApp;
