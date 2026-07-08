import { useState } from "react";
import products from "../data/products";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

import "./Products.css";

function Products() {

  const [search,setSearch]=useState("");

  const filteredProducts=products.filter((item)=>
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="products-page">

      <h1>Our Products</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="grid">

        {filteredProducts.map(product=>(

            <ProductCard
                key={product.id}
                product={product}
            />

        ))}

      </div>

    </div>

  );
}

export default Products;