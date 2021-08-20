import React from 'react'
import styles from '../styles/Footer.module.css';


const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/KarahanGuner">   
                    My GitHub 
                    </a>
                </span>
                &nbsp;
                <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/karahan-g%C3%BCner-9b4b221a0/">
                    My LinkedIn
                    </a>
                </span>
                &nbsp;
                <span>Email: kkarahanguner@gmail.com</span>
              </div>
            <div>Data provided by&nbsp;<a target="_blank" href="https://www.coingecko.com/" rel="noopener noreferrer">CoinGecko</a></div>
        </footer>
    )
}

export default Footer;