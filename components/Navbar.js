import React from "react";
import Link from "next/link";

const Navbar = () => {
  const cartStyle = {
    backgroundColor: "#F59E0D",
  };

  return (
    <div>
      <nav className="container-full mx-auto flex justify-between py-4 shadow-lg">
        <Link href="/">
          <a>
            <img style={{ height: "45px" }} src="images/logo.png" alt="logo" />
          </a>
        </Link>

        <ul className="flex">
          <li className="ml-5 mt-3">
            <Link href="/">Home</Link>
          </li>
          <li className="ml-5 mt-3">
            <Link href="/products">Products</Link>
          </li>
          <li className="ml-5 mt-3">
            <Link href="/about">About</Link>
          </li>
          <li
            className="rounded-full flex ml-5 px-3 py-2 mt-1"
            style={cartStyle}
          >
            <span>10</span>
            <Link href="/cart">
              <img src="images/cart.png" alt="cart" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
