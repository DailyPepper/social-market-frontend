import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import products from '../components/home/home-components/products';
import { Filter } from '../components/home/home-components/Filter';
import Bread from '../components/BreadCrumbs/index'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductPage = () => {
    const { id } = useParams();
    const product = products.find(product => product._id === id);
    const [selectedSize, setSelectedSize] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const images = [product.img, product.img2, product.img3, product.img4, product.img5].filter(Boolean);
    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    const handleEndClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    

    if (!product) {
        return <div>Продукт не найден</div>;
    }


    return (
        <>
            <Header />
            <div className="pl-[9.5rem] pt-[7rem]">
                <Bread/>  
            </div>
            <section className="flex justify-around h-[39rem]">
                <div className="flex select-none">
                    <IoIosArrowBack className="mt-[300px] cursor-pointer " onClick={handleEndClick} size={25}/>
                        <img src={images[currentImageIndex]} alt={product.productName} className="w-[40rem] h-[40rem]" />
                    <IoIosArrowForward className="mt-[300px] cursor-pointer" onClick={handleNextClick} size={25}/>
                </div>
                <div className="flex items-center flex-col justify-center gap-[3rem]">
                    <h1 className="font-bold text-[1.5rem]">{product.productName}</h1>
                    <div className="flex flex-col items-center gap-[2rem]">
                        <p>Размеры</p>
                        <ul className="flex gap-[1rem]">
                            {Filter.SizeSneaker.map((sneak, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer ${selectedSize === index ? 'bg-black text-white w-[25px] h-[26px] flex justify-center' : ''}`}
                                    onClick={() => setSelectedSize(index)}
                                >
                                    {sneak.sneak}
                                </li>
                            ))}
                        </ul>
                        <p>{product.price}$</p>
                    </div>
                    <button className="border border-black w-[200px] h-[40px] transition duration-500 ease-in-out hover:bg-black hover:text-white">
                        Добавить в корзину
                    </button>
                </div>
            </section>
            <section className="flex justify-around w-[1100px] flex-col pl-[10rem] pb-[20px] pr-[100px]">
                <h3 className="font-bold text-[1rem]">Описание</h3>
                <ul className="flex flex-col gap-[15px] pt-[16px]">
                    <li>Бренд: {product.productName}</li>
                    <li>Артикул: {product.articl}</li>
                    <li>Материал: {product.compound}</li>
                    <li>{product.title}</li>
                </ul>
            </section>
            <Footer />
        </>
    );
}

export default ProductPage;
