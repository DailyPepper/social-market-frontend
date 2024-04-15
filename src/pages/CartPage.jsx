import Product from "../components/product/Product";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Slider } from "../components/home/home-components/Slider";
import Filters from "../components/home/home-components/Filters";
import clothes from '../components/Categot/clothes';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/pagination/Pagination';
import Bread from '../components/BreadCrumbs/index'
const CartPage = () => {
    const [page, setPage] = useState(1);
    const productsPerPage = 6;

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const paginatedProducts = clothes.slice(startIndex, endIndex);

    const handleClick = (myLink) => () => {
        window.location.href = myLink;
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <Header />
            <div className="pt-[6rem]">
                <Slider />
            </div>
                <div className="pl-[9.5rem] pt-[1rem]">
                    <Bread/>  
                </div>
            <div className="flex justify-center justify-items-center  gap-[4rem]">
                <div className="pt-[3rem]">
                    <Filters />
                </div>
                <div className="flex flex-col items-center ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-4 font-ralewayFont pt-[3rem]">
                        {paginatedProducts.map((clothes, index) => (
                            <Link key={index} to={`/clothes/${clothes._id}`} onClick={handleClick(`/clothes/${clothes._id}`)}>
                                <Product
                                    _id={clothes._id}
                                    img={clothes.img}
                                    productName={clothes.productName}
                                    price={clothes.price}
                                    color={clothes.color}
                                />
                            </Link>
                        ))}
                    </div>
                    <Pagination
                        totalItems={clothes.length}
                        itemsPerPage={productsPerPage}
                        currentPage={page}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
            <div className="mt-[3rem]">
                <Footer  /> 
            </div>

        </div>
    );
}

export default CartPage;
