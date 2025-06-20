import React from "react";
import { SearchBar, Carousel, Footer , ProductCard } from "../../components/index";

function ProductList() {
  return (
    <div className=" relative bg-green-50  justify-center items-center h-screen  overflow-hidden">
      <div className="flex flex-row justify-evenly items-center mx-7 gap-4">
        <SearchBar />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 fill-indigo-950 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <Carousel className="w-full" />
      <div className="grid grid-cols-2 gap-4 mt-6 px-4">
  <ProductCard image="/wheat.jpg" name="Wheat" price="200" />
  <ProductCard image="/corn.jpg" name="Corn" price="150" />
  {/* More cards */}
</div>

      <div className="fixed bottom-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

export default ProductList;
