import React, { useRef } from "react";

interface Props {
  product:string
  description: string
  setProduct: React.Dispatch<React.SetStateAction<string>>
  setDescription: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void
 
}

const InputProduct: React.FC<Props> = ({
  product,
  description,
  setProduct,
  handleAdd,
  setDescription
}: Props) => {
  //const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form onSubmit={(e)=>{handleAdd(e)}}>
<input placeholder="Name" value={product} onChange={(e)=>{setProduct(e.target.value)}} ></input>
<input placeholder="Description" value={description} onChange={(e) => {setDescription(e.target.value)}}></input>
<button type="submit">add Product</button>

      </form>
     
    </div>
  );
};

export default InputProduct;
