import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/product/Product';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import products from '../components/home/home-components/products';
import Filters from '../components/home/home-components/Filters';
import { Slider } from '../components/home/home-components/Slider';
import Pagination from '../components/pagination/Pagination';
import Bread from '../components/BreadCrumbs/index'
const SneakerPage = () => {
  const [page, setPage] = useState(1);
  const productsPerPage = 6;

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleClick = (myLink) => () => {
    window.location.href = myLink;
  };

  return (
    <>
      <Header />
      <div className="pt-[6rem]">
        <Slider />
      </div>
        <div className="pl-[9.5rem] pt-[1rem]">
          <Bread/>  
        </div>
      <div className="flex justify-center justify-items-center gap-[4rem]">
        <div className="pt-[3rem]">
          <Filters />
        </div>
        <div className="flex flex-col items-center ">
        <div onClick={handleClick('/product')} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-4 font-ralewayFont pt-[3rem]">
          {paginatedProducts.map((product, index) => (
            <Link key={index} to={`/product/${product._id}`} onClick={handleClick(`/product/${product._id}`)}>
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
      <div className='mt-[3rem]'>
        <Footer />
      </div>
    </>
  );
};

export default SneakerPage;