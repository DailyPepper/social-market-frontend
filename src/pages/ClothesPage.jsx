import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import clothes from '../components/Categot/clothes'
import { Filter } from '../components/home/home-components/Filter';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Bread from '../components/BreadCrumbs/index'
const ClothesPage = () => {
    const { id } = useParams();
    const selectedClothes = clothes.find(item => item._id === id);
    const [selectedSize, setSelectedSize] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const images = [selectedClothes.img, selectedClothes.img2, selectedClothes.img3, selectedClothes.img4, selectedClothes.img5].filter(Boolean);
    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    const handleEndClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    

    if (!selectedClothes) {
        return <div>Продукт не найден</div>;
    }
    return (
        <>
            <Header />
            <div className="pl-[9.5rem] pt-[7rem]">
                <Bread/>  
            </div>
            <section className="flex justify-around h-[39rem] pt-[2rem]">
                <div className="flex select-none">
                    <IoIosArrowBack className="mt-[300px] cursor-pointer " onClick={handleEndClick} size={25}/>
                        <img src={images[currentImageIndex]} alt={selectedClothes.productName} className="w-[35rem] h-[40rem]" />
                    <IoIosArrowForward className="mt-[300px] cursor-pointer" onClick={handleNextClick} size={25}/>
                </div>
                <div className="flex items-center flex-col justify-center gap-[3rem]">
                    <h1 className="font-bold text-[1.5rem]">{selectedClothes.productName}</h1>
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
                        <p>{selectedClothes.price}$</p>
                    </div>
                    <button className="border border-black w-[200px] h-[40px] transition duration-500 ease-in-out hover:bg-black hover:text-white">
                        Добавить в корзину
                    </button>
                </div>
            </section>
            <section className="flex justify-around w-[1100px] flex-col pl-[12.5rem] pb-[20px] pr-[100px] pt-[6rem]">
                <h3 className="font-bold text-[1rem]">Описание</h3>
                <ul className="flex flex-col gap-[15px] pt-[16px]">
                    <li>Бренд: {selectedClothes.productName}</li>
                    <li>Артикул: {selectedClothes.articl}</li>
                    <li>{selectedClothes.title}</li>
                </ul>
            </section>
            <Footer />
        </>
    );
}
 
export default ClothesPage;