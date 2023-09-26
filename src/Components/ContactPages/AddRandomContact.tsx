import React from 'react'
import { getRandomTask } from '../Utility/api'

export interface productType {
    productName: string,
    productDesc: string,
}

interface AddRandomProps {
    setProduct: React.Dispatch<React.SetStateAction<string>>;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (pro: productType) => void;
}

const handleClick = async (props: AddRandomProps) => {
    var response = await  getRandomTask();
  //  props.setProduct(response.data?.brand ?? "");
  //  props.setDescription(response.data?.equipment ?? "");
    var product_tmp : productType = {
        productName : response.data?.brand ?? "",
        productDesc : response.data?.equipment ?? ""
    }
    props.handleAdd(product_tmp);
}

const AddRandomContact = (props: AddRandomProps) => {
  return (
    <div>
        <button onClick={()=>handleClick(props)}>Add Random </button>
    </div>
  )
}

export default AddRandomContact