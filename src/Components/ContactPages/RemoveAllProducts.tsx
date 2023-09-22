import React from "react";
interface removeProductProps {
  handleRemoveAllProducts: () => void;
}
const RemoveAllProducts: React.FC<removeProductProps> = ({
  handleRemoveAllProducts,
}: removeProductProps) => {
  return (
    <div>
      <button
        onClick={() => {
          handleRemoveAllProducts();
        }}
      >
        {" "}
        Clear All{" "}
      </button>
    </div>
  );
};

export default RemoveAllProducts;
