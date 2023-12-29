import React from "react";

interface DetailsProps {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}

const Quantity: React.FC<DetailsProps> = ({ num, setNum }) => {
  return (
    <div className="quantity-container">
      <div
        className="decrease"
        onClick={() => setNum((prevNum) => Math.max(prevNum - 1, 1))}
      >
        -
      </div>
      <input type="number" id="number" value={num} readOnly />
      <div
        className="increase"
        onClick={() => setNum((prevNum) => prevNum + 1)}
      >
        +
      </div>
    </div>
  );
};

export default Quantity;
