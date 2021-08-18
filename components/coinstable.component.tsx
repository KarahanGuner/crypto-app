import React from 'react'
import Link from 'next/link'
import styles from '../styles/Coinstable.module.css';
import utils from '../styles/Utils.module.css';

interface IProps {
    data: {
      [key: string]: any
    }[]
  }

const CoinsTable: React.FC<IProps> = ({data}) => {
    const renderRows = () => {
        return data.map(function(coin, index) {
            return (
                <tr key={index} >
                    <td className={utils["text-align-center"]}>{coin.market_cap_rank}</td>
                    <td className={utils["text-align-start"]}>
                        <div className={styles["table__name-row"]}>
                            <img src={coin.image} alt={coin.name} className={styles["table__coin-icon"]}/> 
                            &nbsp;
                            {coin.name}
                            &nbsp;  
                            <span className={utils["gray-text"]}>
                                {coin.symbol.toUpperCase()}
                            </span>
                        </div>
                    </td>
                    <td>
                        {coin.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 4 })}
                    </td>
                    <td>
                        {coin.market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}
                    </td>
                    <td className={coin.price_change_percentage_24h_in_currency >= 0 ? utils["green-text"] : utils["red-text"]} >
                        {coin.price_change_percentage_24h_in_currency.toLocaleString('en-US', { maximumFractionDigits: 2 })}%
                    </td>
                    <td className={coin.price_change_percentage_24h_in_currency >= 0 ? utils["green-text"] : utils["red-text"]} >
                        {coin.price_change_percentage_7d_in_currency.toLocaleString('en-US', { maximumFractionDigits: 2 })}%
                    </td>
                    <td>
                        {coin.circulating_supply.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </td>
                </tr>
            )
          });
    }

    return (
        <table className={styles["coins-table"]}>
            <thead>
                <tr>
                    <th className={utils["text-align-center"]}>Rank</th>
                    <th className={utils["text-align-start"]}>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>24h%</th>
                    <th>7d%</th>
                    <th>Circulating Supply</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default CoinsTable;