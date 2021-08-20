import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css';
import SearchFilter from './searchfilter.component';


const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__home}>Home</div>
            <div className={styles.header__icon}>Logo</div>
            <div className={styles.header__search}><SearchFilter /></div>
        </div>
    )
}

export default Header;