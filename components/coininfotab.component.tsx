import React from 'react'
import styles from '../styles/Coininfotab.module.css';

interface IProps {
    info: {
      [key: string]: any;
    };
}
  

const CoinInfoTab: React.FC<IProps> = ({info}) => {
    return (
        <div className={styles["coin-info-tab-container"]}>
            <h2>{info.name} ({info.symbol.toUpperCase()}) Market Data</h2>
            <table>
                <tbody>
                    <tr>
                        <th>{info.name} Price</th>
                        <td>{info.market_data.current_price.usd > 1 ? info.market_data.current_price.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 4 }): info.market_data.current_price.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4, maximumFractionDigits: 10 })}</td>
                    </tr>
                    <tr>
                        <th>Market Cap</th>
                        <td>{info.market_data.market_cap.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</td>
                    </tr>
                    <tr>
                        <th>24h Price Change</th>
                        <td>{info.market_data.price_change_percentage_24h.toLocaleString('en-US', { maximumFractionDigits: 2 })}%</td>
                    </tr>
                    <tr>
                        <th>7d Price Change</th>
                        <td>{info.market_data.price_change_percentage_7d.toLocaleString('en-US', { maximumFractionDigits: 2 })}%</td>
                    </tr>
                    <tr>
                        <th>24h Trading Volume</th>
                        <td>{info.market_data.total_volume.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</td>
                    </tr>
                    <tr>
                        <th>24h Low</th>
                        <td>{info.market_data.low_24h.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 4 })}</td>
                    </tr>
                    <tr>
                        <th>24h High</th>
                        <td>{info.market_data.high_24h.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 4 })}</td>
                    </tr>
                    <tr>
                        <th>Rank</th>
                        <td>#{info.market_cap_rank}</td>
                    </tr>
                    <tr>
                        <th>All Time High</th>
                        <td>{info.market_data.ath.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 4 })}</td>
                    </tr>
                    <tr>
                        <th>Circulating Supply</th>
                        <td>{info.market_data.circulating_supply.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                    </tr>
                    <tr>
                        <th>Max Supply</th>
                        <td>{info.market_data.max_supply ? info.market_data.max_supply.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) : 'No Data'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CoinInfoTab;