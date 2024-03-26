import { Link } from 'react-router-dom';
import Product from '../../product/Product';
// import Pagination from '../../pagination/Pagination'
// import { Filter } from './filter';
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import products from './products';
import Filters from './Filters'
const ProductGrid = () => {
  const [page, setPage] = useState(1);
  const productsPerPage = 6;

  const getPaginatedProducts = () => {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex);
  };
  

  return (
  <div className="lg:max-w-[value] mx-auto px-4 flex flex-row gap-[3rem] justify-center items-stretch">
    <Filters/>
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-4 font-ralewayFont">
        {getPaginatedProducts().map(product => (
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
      <div className="flex justify-center w-full pt-[4rem] gap-[5rem]">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <IoIosArrowBack size={25}/>
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={getPaginatedProducts().length < productsPerPage}
        >
          <IoIosArrowForward size={25}/>
        </button>
      </div>
    </div>
  </div>


  );
};

export default ProductGrid;
