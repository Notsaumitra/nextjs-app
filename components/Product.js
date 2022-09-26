import React from "react";
import Image from "next/image";

const Product = ({ name, image, price, size, _id }) => {
  return (
    <div>
      <Image
        src={`/images/pizza${image}.png`}
        alt="sm-pizza"
        width="270px"
        height="270px"
      />
      <div className="text-center">
        <h2 className="text-lg font-bold py-2">{name}</h2>
        <span className="bg-gray-200 py-1 rounded-full px-4">{size}</span>
      </div>
      <div className="flex justify-between">
        <span>{"₹ " + price}</span>
        <button className="bg-yellow-500 py-1 px-3 rounded-full font-bold">
          ADD
        </button>
      </div>
    </div>
  );
};

export default Product;
