import { iconRoute } from "./icon route";
const HeadDesctop = () => {
    const handleAddCatd = () => {

    }
    return ( 
        <>
            <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
                {iconRoute.map((iconRou) => {
                    const { title, img, alt, href, index } = iconRou;
                    return (
                        <li key={index}>
                            <a
                                href={href}
                                className="flex items-center gap-1 hover:underline hover:text-neutral-400 transition-all"
                                onClick={handleAddCatd}
                            >
                                <img src={img} alt={alt} className="cursor-pointer" />
                            </a>
                        </li>
                    );
                }
                )}
            </ul>
        </>
    );
}

export default HeadDesctop;
