import React from "react";
import Image from "next/image";
const Main = () => {
  return (
    <>
      <div className="py-3">
        <div className="container flex mx-auto justify-between items-center">
          <div className="w-1/2 ml-20">
            <h6 className="text-lg">
              <em>Are you hungry?</em>
            </h6>
            <h1 className="text-3xl font-bold">Don't wait!</h1>
            <button className="rounded-full bg-yellow-500 px-5 py-2 mt-2 hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <Image
              className="w-4/5"
              src="/images/pizza.png"
              alt="pizza"
              width="300px"
              height="300px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
