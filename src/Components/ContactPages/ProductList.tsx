import React from "react";
import { Product } from "./InterfaceProduct";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

type Props = {
  product: Product;
  producto: Product[];

  setProducto: React.Dispatch<React.SetStateAction<Product[]>>;
};

const ProductList = ({ product, producto, setProducto }: Props) => {
  const handleDone = (id: number) => {
    setProducto(
      producto.map((product) =>
        product.id === id ? { ...product, isDone: !product.isDone } : product
      )
    );
  };

  const handleDelete = (id: number) => {
    setProducto(producto.filter((product) => product.id !== id));
  };

  return (
    <div>
      <form className="todos__single">
        {product.isDone ? (
          <s className="todos__single--text" key={product.id}>
            {product.product} - {product.description}
          </s>
        ) : (
          <span className="todos__single--text" key={product.id}>
            {product.product} - {product.description}
          </span>
        )}

        <div>
          <span>
            <AiFillEdit className="icon" />
          </span>
          <span>
            <AiFillDelete
              className="icon"
              onClick={() => handleDelete(product.id)}
            />
          </span>
          <span>
            <MdDone className="icon" onClick={() => handleDone(product.id)} />
          </span>
        </div>
      </form>

      {/* <li key={product.id}>{product.product} - {product.description}</li> */}
    </div>
  );
};

export default ProductList;
