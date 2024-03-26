import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Hero() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000, 
        pauseOnHover: true,
      };   
return (
        <ul className="p-10 pt-10 pb-10 pl-10">
            <Slider {...settings}>
                <li className="w-96 p-2.5">
                    <a href="" className="items-center flex flex-col">
                        <img src="https://sun9-20.userapi.com/impg/6Ui-ZVqJgq7GCFQNeKR7jDmQKfwm9Zamp5H-xQ/0c0JV_2YgsQ.jpg?size=1284x1597&quality=95&sign=aa0a88a1330945a34b905019db87bf64&type=album" alt="nonmenswear" />
                        <p className='font-medium'>Одежда</p>
                    </a>
                </li>
                <li className="w-96 p-2.5">
                    <a href="" className="items-center flex flex-col">
                        <img src="https://sun9-58.userapi.com/impg/c857224/v857224145/1b2c8b/Et2BTX03G0U.jpg?size=1080x1350&quality=96&sign=23161a1df67d8543c0a64bb0b061d029&type=album" alt="nonmenswear" />
                        <p className='font-medium'>Обувь</p>
                    </a>
                </li>
                <li className="w-96 p-2.5"> 
                    <a href="" className="items-center flex flex-col">
                        <img src="https://sun9-20.userapi.com/impg/6Ui-ZVqJgq7GCFQNeKR7jDmQKfwm9Zamp5H-xQ/0c0JV_2YgsQ.jpg?size=1284x1597&quality=95&sign=aa0a88a1330945a34b905019db87bf64&type=album" alt="nonmenswear" />
                        <p className=' font-medium'>Бренды</p>
                    </a>
                </li>
                <li className="w-96 p-2.5">
                    <a href="" className="items-center flex flex-col">
                        <img src="https://sun9-58.userapi.com/impg/c857224/v857224145/1b2c8b/Et2BTX03G0U.jpg?size=1080x1350&quality=96&sign=23161a1df67d8543c0a64bb0b061d029&type=album" alt="nonmenswear" />
                        <p className='font-medium'>Аксессуары</p>
                    </a>
                </li>
                <li className="w-96 p-2.5">
                    <a href="" className="items-center flex flex-col">
                        <img src="https://sun9-20.userapi.com/impg/6Ui-ZVqJgq7GCFQNeKR7jDmQKfwm9Zamp5H-xQ/0c0JV_2YgsQ.jpg?size=1284x1597&quality=95&sign=aa0a88a1330945a34b905019db87bf64&type=album" alt="nonmenswear" />
                        <p className=' font-medium'>Новинки</p>
                    </a>
                </li>
            </Slider>
        </ul>
    );
}

export default Hero;