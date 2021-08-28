import type { NextPage } from 'next'
import {useState} from 'react';
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import CoinsTable from '../components/coinstable.component';
import styles from '../styles/Home.module.css'
import utils from '../styles/Utils.module.css';

interface IProps {
  data: {
    [key: string]: any
  }[];
  marketData: {
    [key: string]: any
  }
}

const Home: NextPage<IProps> = ({data, marketData}) => {
  return (
    <div >
      <Head>
        <title>Coinstack</title>
        <meta name="description" content="Cryptocurrency prices, market caps, volumes and charts. Historical data for Bitcoin, Ethereum and many more coins." />
        <link rel="icon" href="/stack.svg" />
      </Head>
      <Header/>
      <div className={styles["marketstats-container"]}>
        <div className={styles.marketstats}>
          <div>
            <div className={utils["text-align-center"]}>Market Cap</div> 
            <div>{marketData.total_market_cap.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</div>
          </div>
          <div>
            <div className={utils["text-align-center"]}>24h Volume</div>
            <div>{marketData.total_volume.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}</div>
          </div>
        </div>
      </div>
      <div className={styles["table-container"]}>
        <CoinsTable data={data}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await Promise.all([
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d').then(res => res.json()),
    fetch('https://api.coingecko.com/api/v3/global').then(res => res.json())
  ])

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {data: data[0], marketData: data[1].data}
  }
}