import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Bread = () => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((path) => path !== '');

    const pageNames = {
        "/": "Главная",
        "login": "Авторизация", 
        "sneaker": "Кроссовки", 
        "cart": "Одежда", 
        "accessories" : "Аксессуары"
    };

    const breadcrumbs = pathNames.map((path, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathNames.length - 1;

        const crumbClass = isLast ? "breadcrumb-last" : "no-underline text-black font-montserrat text-lg"; // Увеличиваем размер шрифта
        const pageName = pageNames[path] || path;

        return (
            <li key={index} className={`list-none ${crumbClass}`}>
                {isLast ? (
                    <span className="no-underline text-black font-montserrat text-lg">
                        {pageName} /
                    </span>
                ) : (
                    <Link to={routeTo}>{pageName}</Link>
                )}
            </li>
        );
    });

    const homeCrumb = (
        <li key="home" className="list-none">
            <Link to="/" className="no-underline text-black font-montserrat text-lg">Главная</Link> /
        </li>
    );

    const firstThreeCrumbs = breadcrumbs.slice(0, 3); // Отображаем только первые три уровня пути

    return (
        <>
            <nav aria-label="breadcrumbs">
                <ul className="flex gap-[15px] flex-row">
                    {homeCrumb}
                    {firstThreeCrumbs}
                </ul>
            </nav>
        </>
    );
}

export default Bread;
