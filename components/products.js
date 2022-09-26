import React from "react";
import Product from "./Product";

const Products = (props) => {
  return (
    <div className="container mx-auto pb-25 mb-20">
      <div>
        <h1 className="text-lg font-bold my-8">Products</h1>
        <div className="grid grid-cols-5 my-8 gap-24">
          {props.props
            ? props.props.map((item, index) => (
                <Product
                  key={item._id}
                  name={item.name}
                  size={item.size}
                  image={index + 1}
                  price={item.price}
                  _id={item._id}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Products;
