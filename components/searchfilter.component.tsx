import React, { useState, useEffect, useRef } from 'react'
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
            <input type="search" placeholder="Search" onChange={(e) => { setSearchTerm(e.target.value) }} value={searchTerm} />
            {searchTerm ?
                <div className={styles["results"]}>
                    {coins.filter(entry => entry.name.toLowerCase().includes(searchTerm.toLowerCase())).map((coin, index) => (
                        <a href={`/coins/${coin.id}`} key={index}>
                            <div>
                                <img src={`https://assets.coingecko.com/coins/images${coin.image}`} alt={coin.name} className={styles["results__coin-icon"]}/> 
                                &nbsp;
                                {coin.name}
                                &nbsp;  
                                <span className={utils["gray-text"]}>
                                    {coin.symbol.toUpperCase()}
                                </span>
                            </div>
                        </a>
                    ))}
                </div> :
                null}
        </div>
    )
}

export default SearchFilter;