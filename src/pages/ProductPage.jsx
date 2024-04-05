import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import products from '../components/home/home-components/products';
import { Filter } from '../components/home/home-components/Filter';
import { colors } from '../components/home/home-components/color';

const ProductPage = () => {
    const { id } = useParams();
    const product = products.find(product => product._id === id);

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    return ( 
        <>
            <Header/>
            <section className="flex justify-around h-[39rem]">
                <div className="">
                    <img src={product.img} alt={product.productName} className="w-[40rem] h-[40rem]"/>
                </div>
                <div className="flex items-center flex-col justify-center gap-[3rem]">
                    <h1 className="font-bold text-[1.5rem]">{product.productName}</h1>
                    <div className="flex gap-1">
                        {colors.map((color, index) => (
                            <div key={index} className="w-[1.5rem] h-[1.5rem] rounded-full cursor-pointer" style={{ backgroundColor: color.color }} title={color.alt}></div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center gap-[2rem]">
                        <p>Размеры</p>
                        <ul className="flex gap-[1rem]">
                            {Filter.SizeSneaker.map((sneak, index) => (
                                <li key={index} className="cursor-pointer">
                                    {sneak.sneak}
                                </li>   
                            ))}                        
                        </ul>
                        <p>{product.price}$</p>   
                    </div>
                    <button className="border border-black w-[200px] h-[40px]">
                        Добавить в корзину
                    </button>
                </div>
            </section>
            <section className="flex justify-around pb-[20rem]">
                <h3>Описание</h3>
                <div>
                    <p>{product.productName}</p>
                    <p>{product.description}</p>
                </div>
            </section>
            <Footer/>
        </>
     );
}
 
export default ProductPage;
