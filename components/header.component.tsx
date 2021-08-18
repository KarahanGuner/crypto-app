import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css';
import SearchFilter from './searchfilter.component';

interface IProps {
    data: {
      [key: string]: any
    }[];
}

const Header: React.FC<IProps> = ({data}) => {
    return (
        <div className={styles.header}>
            <div className={styles.header__home}>Home</div>
            <div className={styles.header__icon}>Logo</div>
            <div className={styles.header__search}><SearchFilter data={data}/></div>
        </div>
    )
}

export default Header;