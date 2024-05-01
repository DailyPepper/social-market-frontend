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
    branName.sort()
    const brandMap = []
    branName.forEach(brand => {
        const firstLetter = brand.charAt(0).toUpperCase()
        if(!brandMap[firstLetter]){
            brandMap[firstLetter] = []
        }
        brandMap[firstLetter].push(brand)
    })
    return ( 
        <>
            <Header/>
            <section className='pt-[7rem] pb-[10rem]'>
                <div className="pl-[9.5rem] pt-[1rem]">
                    <Bread/>  
                </div>
                <ul className={`flex justify-center text-[25px] gap-[31px] pt-[2rem]`}>
                    {englishAlphabet.map((letter, index) => (
                        <li key={index}>{letter}</li>
                    ))}
                </ul>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-16 font-ralewayFont pt-[3rem] pl-[10rem] pr-[2rem] '>
                    {Object.entries(brandMap).map(([letter, brands]) => (
                        <div key={letter} className='flex gap-[1rem]'>
                            <h2>{letter}</h2>
                            <ul>
                                {brands.map((brand, index) => (
                                    <li key={index}>{brand}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </>
     );
}
 
export default BrandPage;