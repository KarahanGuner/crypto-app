import type { NextPage } from "next";
import { useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header.component";
import Footer from "../../components/footer.component";
import LineChart from "../../components/linechart.component";
import CoinInfoTab from "../../components/coininfotab.component";
import LinksTab from "../../components/linkstab.component";
import styles from "../../styles/Coinpage.module.css";
import utils from "../../styles/Utils.module.css";

interface IProps {
  info: {
    [key: string]: any;
  };
  marketData: {
    [key: string]: any;
  };
}

interface IMarketData {
  prices: [];
}

//turns market_chart data to a format chartjs can understand. also gets rid of market_caps and total_volumes
const formatMarketData = (data: IMarketData) => {
  return {
    prices: data["prices"].map((el) => {
      return {
        x: el[0],
        y: el[1],
      };
    }),
  };
};

const CoinPage: NextPage<IProps> = ({ info, marketData }) => {
  const [chosenTimeInterval, setChosenTimeInterval] = useState<string>("1");
  const [prices, setPrices] = useState<any>({
    "1": marketData.prices,
    "7": undefined,
    "30": undefined,
    "90": undefined,
    "180": undefined,
    "365": undefined,
    max: undefined,
  });

  const handleChangeTimeInterval = async (interval: string) => {
    if (chosenTimeInterval == interval) {
      return;
    }
    if (!prices[interval]) {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${info.id}/market_chart?vs_currency=usd&days=${interval}`
      );
      const data = await res.json();
      const formattedData = formatMarketData(data);
      setPrices({ ...prices, [interval]: formattedData.prices });
      setChosenTimeInterval(interval);
    } else {
      setChosenTimeInterval(interval);
    }
  };

  return (
    <div>
      <Head>
        <title>
          {info.name} ({info.symbol.toUpperCase()}) Market Data | CoinStack
        </title>
        <meta
          name="description"
          content={`${info.name} price, volume, market cap, chart and information.`}
        />
        <link rel="icon" href="/stack.svg" />
      </Head>
      <Header />
      <div className={styles["coin-container"]}>
        <div className={styles["grid-item-1"]}>
          <LinksTab info={info} />
        </div>

        <div className={styles["grid-item-2"]}>
          <CoinInfoTab info={info} />
        </div>
        <div className={styles["grid-item-3"]}>
          <div className={styles["timeinterval-buttons-container"]}>
            <button
              onClick={() => {
                handleChangeTimeInterval("1");
              }}
              className={
                chosenTimeInterval == "1"
                  ? styles["chosen-timeinterval-button"]
                  : styles["timeinterval-button"]
              }
            >
              1D
            </button>
            <button
              onClick={() => {
                handleChangeTimeInterval("7");
              }}
              className={
                chosenTimeInterval == "7"
                  ? styles["chosen-timeinterval-button"]
                  : styles["timeinterval-button"]
              }
            >
              1W
            </button>
            <button
              onClick={() => {
                handleChangeTimeInterval("30");
              }}
              className={
                chosenTimeInterval == "30"
                  ? styles["chosen-timeinterval-button"]
                  : styles["timeinterval-button"]
              }
            >
              1M
            </button>
            <button
              onClick={() => {
                handleChangeTimeInterval("90");
              }}
              className={
                chosenTimeInterval == "90"
                  ? styles["chosen-timeinterval-button"]
                  : styles["timeinterval-button"]
              }
            >
              3M
            </button>
            <button
              onClick={() => {
                handleChangeTimeInterval("180");
              }}
              className={
                chosenTimeInterval == "180"
                  ? styles["chosen-timeinterval-button"]
                  : styles["timeinterval-button"]
              }
            >
              6M
            </button>
            <button
              onClick={() => {
                handleChangeTimeInterval("365");
              }}
              className={
                chosenTimeInterval == "365"
                  ? styles["chosen-timeinterval-button"]
                  : styles["timeinterval-button"]
              }
            >
              1Y
            </button>
            <button
              onClick={() => {
                handleChangeTimeInterval("max");
              }}
              className={
                chosenTimeInterval == "max"
                  ? styles["chosen-timeinterval-button"]
                  : styles["timeinterval-button"]
              }
            >
              ALL
            </button>
          </div>
          <LineChart chartData={prices[chosenTimeInterval]} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoinPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await Promise.all([
    fetch(
      `https://api.coingecko.com/api/v3/coins/${
        context.params!.id
      }?localization=false`
    ).then((res) => res.json()),
    fetch(
      `https://api.coingecko.com/api/v3/coins/${
        context.params!.id
      }/market_chart?vs_currency=usd&days=1`
    ).then((res) => res.json()),
  ]);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { info: data[0], marketData: formatMarketData(data[1]) },
  };
};
