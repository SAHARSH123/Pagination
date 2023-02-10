import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Products from "./Products";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skip = currentPage === 1 ? 0 : (currentPage - 1) * 10 - 1;
        const productData = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${skip}`
        );
        const products = await productData.json();
        setData(products.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentPage]);

  const setPage = (pageNo) => {
    setCurrentPage(pageNo);
  };

  return (
    <div className="App">
      <div className="container">
        <Products products={data} />
      </div>
      <br />
      <Footer currentPage={currentPage} setPage={setPage} />
    </div>
  );
}

export default App;
