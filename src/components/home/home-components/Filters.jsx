import React, {useState} from "react";
import {Filter} from './Filter';

const Filters = () => {
    const [click, setClick] = useState(true);
    const handleFilterClick = () => {
      setClick(prevState => !prevState);
    };
    return ( 
        <>
            <div className="">
      <p className="text-4xl cursor-pointer" onClick={handleFilterClick}>
        Фильтры
      </p>
      {click && (
        <div className="block pt-[2rem]">
          <ul className="flex gap-[2rem] contents">
            {Object.keys(Filter).map(filterKey => (
              <div className="flex flex-col" key={filterKey}>
                {['Categor', 'Size', 'Brand', 'Sex'].includes(filterKey) ? (
                  <h3 className="text-2xl">{Filter[filterKey][0].title}</h3>
                ) : null}
                {Filter[filterKey].slice(1).map((filterItem, index) => (
                  <li key={index} className="pt-[0.5rem]">
                    {filterItem.name && (
                      <label className="flex items-center gap-[0.5rem]">
                        <input
                          type="checkbox"
                          className="appearance-none border border-black rounded w-4 h-4 checked:bg-black checked:border-white"
                        />
                        <span>{filterItem.name}</span>
                      </label>
                    )}
                    {filterItem.sz && (
                      <label className="flex items-center gap-[0.5rem]">
                        <input
                          type="checkbox"
                          className="appearance-none border border-black rounded w-4 h-4 checked:bg-black checked:border-white"
                        />
                        <span>{filterItem.sz}</span>
                      </label>
                    )}
                    {filterItem.BN && (
                      <label className="flex items-center gap-[0.5rem]">
                        <input
                          type="checkbox"
                          className="appearance-none border border-black rounded w-4 h-4 checked:bg-black checked:border-white"
                        />
                        <span>{filterItem.BN}</span>
                      </label>
                    )}
                    {filterItem.pol && (
                      <label className="flex items-center gap-[0.5rem]">
                        <input
                          type="checkbox"
                          className="appearance-none border border-black rounded w-4 h-4 checked:bg-black checked:border-white"
                        />
                        <span>{filterItem.pol}</span>
                      </label>
                    )}
                  </li>
                ))}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
        </>
     );
}
 
export default Filters;
