import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../product/Product';
import Pagination from '../../pagination/Pagination';
import Filters from './Filters';
import products from './products';

const ProductGrid = () => {
  const [page, setPage] = useState(1);
  const productsPerPage = 6;

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="lg:max-w-[value] mx-auto px-4 flex flex-row gap-[3rem] justify-center items-stretch">
      <Filters />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-4 font-ralewayFont">
          {paginatedProducts.map(product => (
            <Link key={product._id} to={`/product/${product._id}`}> 
              <Product
                _id={product._id}
                img={product.img}
                productName={product.productName}
                price={product.price}
                color={product.color}
              />
            </Link>
          ))}
        </div>
        <Pagination
          totalItems={products.length}
          itemsPerPage={productsPerPage}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductGrid;
