import React, { useEffect, useState } from "react";
import "../App.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  const itemsPerPage = 9; 

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      if (data && data.products) {
        setProducts(data.products);
        setError("");
      }
    } catch (e) {
      console.error("Error fetching products!", e);
      setError("Failed to load products. Please try again later.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePage = (selectedPage) => {
    setPage(selectedPage);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < Math.ceil(products.length / itemsPerPage)) setPage(page + 1);
  };

  return (
    <>
      <h1>Pagination</h1>
      {error && <p className="error">{error}</p>}
      {products.length > 0 && (
        <div className="products">
          {products.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((prod) => (
            <span className="products__single" key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </span>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span onClick={handlePrevPage}>👈</span>
          {[...Array(Math.ceil(products.length / itemsPerPage))].map((_, i) => (
            <span
              className={page === i + 1 ? "paginationSelected" : ""}
              onClick={() => handlePage(i + 1)}
              key={i}
            >
              {i + 1}
            </span>
          ))}
          <span onClick={handleNextPage}>👉</span>
        </div>
      )}
    </>
  );
};

export default Pagination;
