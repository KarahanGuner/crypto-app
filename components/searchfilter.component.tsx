import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Searchfilter.module.css';
import utils from '../styles/Utils.module.css';

interface IProps {
    data: {
        [key: string]: any
    }[];
}

const SearchFilter: React.FC<IProps> = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    return (
        <div className={styles["searchfilter-container"]}>
            <input type="text" placeholder="Search..." onChange={(e) => { setSearchTerm(e.target.value) }} value={searchTerm} />
            {searchTerm ?
                <div className={styles["results"]}>
                    {data.filter(entry => entry.name.toLowerCase().includes(searchTerm.toLowerCase())).map((coin, index) => (
                        <div key={index}>
                            <img src={coin.image} alt={coin.name} className={styles["results__coin-icon"]}/> 
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