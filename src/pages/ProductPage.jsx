import Product from "../components/product/Product";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import products from "../components/home/home-components/products"
import Filters from '../components/home/home-components/Filters'
import {Slider} from '../components/home/home-components/Slider'
const ProductPage = () => {
      const handleClick = (myLink) => () => {
        window.location.href=myLink;
      }
  return (
    <>
      <Header/>
      <div className="pt-[6rem]">
        <Slider/>
      </div>
        <div className="flex justify-center  justify-items-center	 pl-[6rem]">
          <div className="pt-[5rem]">
            <Filters/>
          </div>
          <div onClick={handleClick('/product')} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-4 font-ralewayFont p-[10rem] pt-[5rem]">
              {products.map((product, index) => (
                <Product
                  key={index}
                  _id={product._id}
                  img={product.img}
                  productName={product.productName}
                  price={product.price}
                  color={product.color} 
                />
              ))}
            </div>
        </div>
      <Footer/>
    </>
  )
}

export default ProductPage