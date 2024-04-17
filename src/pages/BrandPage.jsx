import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Bread from '../components/BreadCrumbs/index'
import branName from '../components/Categot/brandName';
function generateAlphabet() {
    const alphabet = [];
    for (let i = 65; i <= 90; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
}
const BrandPage = () => {
    const englishAlphabet = generateAlphabet()
    return ( 
        <>
            <Header/>
            <section className='pt-[7rem] pb-[25rem]'>
                <div className="pl-[9.5rem] pt-[1rem]">
                    <Bread/>  
                </div>
                <ul className={`flex justify-center text-[25px] gap-[31px] pt-[2rem]`}>
                    {englishAlphabet.map((letter, index) => (
                        <li key={index}>{letter}</li>
                    ))}
                </ul>
                <ul>
                    {branName.map((index,branNames)=>{
                        <li key={index}>
                            {branNames.brand}
                        </li>
                    })}
                </ul>
            </section>
            <Footer/>
        </>
     );
}
 
export default BrandPage;