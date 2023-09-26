import React, { useState } from "react";
import { Product } from "./InterfaceProduct";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

type Props = {
  product: Product;
  producto: Product[];
  //description:any

  setProducto: React.Dispatch<React.SetStateAction<Product[]>>;
};

const ProductList = ({ product, producto, setProducto }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editProduct, setEditProduct] = useState<string>(product.product);

  const [editDescription, setEditDescription] = useState<string>(
    product.description
  );

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

  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();

    setProducto(
      producto.map(
        (product) =>
          product.id === id
            ? { ...product, product: editProduct, description: editDescription }
            : product,
        product.description
      )
    );
    console.log(editDescription);
    setEdit(false);
  };

  return (
    <div>
      <form
        className="todos__single"
        onSubmit={(e) => handleEdit(e, product.id)}
      >
        {edit ? (
            <>
                {"product  - "}
                <input 
                value={editProduct}
                onChange={(e) => setEditProduct(e.target.value)}
                className="todo__single--text"
                />   {" Des      " }
                <input
                value={editDescription}
                onChange={(a) => setEditDescription(a.target.value)}
                className="todo__single--textpopo"
                />
                <button type="submit">Done Editing</button>
            </>


                    ) : //  <input value={editDescription}  onChange={(e)=>setEditDescription(e.target.value)} className="todo__single--text"/>

        product.isDone ? (
          <s className="todos__single--text" key={product.id}>
            {product.product} - {product.description}
          </s>
        ) : (
          <span className="todos__single--text" key={product.id}>
            {product.product} - {product.description}
          </span>
        )}

        {/* {product.isDone ? (
          <s className="todos__single--text" key={product.id}>
            {product.product} - {product.description}
          </s>
        ) : (
          <span className="todos__single--text" key={product.id}>
            {product.product} - {product.description}
          </span>
        )} */}

        <div>
          <span>
            <AiFillEdit
              className="icon"
              onClick={() => {
                if (!edit && !product.isDone) {
                  setEdit(!edit);
                }
              }}
            />
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
