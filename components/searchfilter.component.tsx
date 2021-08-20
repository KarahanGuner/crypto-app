import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from '../styles/Searchfilter.module.css';
import utils from '../styles/Utils.module.css';
import coins from '../public/data/coins'


const SearchFilter: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    let searchFilterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let handler = (event: any) => {
            if (!searchFilterRef.current!.contains(event.target)) {
                setSearchTerm('');
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    });

    return (
        <div ref={searchFilterRef} className={styles["searchfilter-container"]}>
            <i><svg className={styles["searchfilter__search-icon"]} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></i>
            <input type="text" placeholder="Search" onChange={(e) => { setSearchTerm(e.target.value) }} value={searchTerm} />
            {searchTerm ?
                <div className={styles["results"]}>
                    {coins.filter(entry => entry.name.toLowerCase().includes(searchTerm.toLowerCase())).map((coin, index) => (
                        <div key={index}>
                            <img src={`https://assets.coingecko.com/coins/images${coin.image}`} alt={coin.name} className={styles["results__coin-icon"]}/> 
                            &nbsp;
                            {coin.name}
                            &nbsp;  
                            <span className={utils["gray-text"]}>
                                {coin.symbol.toUpperCase()}
                            </span>
                        </div>
                    ))}
                </div> :
                null}
        </div>
    )
}

export default SearchFilter;