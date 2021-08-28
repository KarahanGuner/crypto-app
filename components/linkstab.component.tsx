import React from "react";
import styles from "../styles/Linkstab.module.css";
import SearchFilter from "./searchfilter.component";

interface IProps {
  info: {
    [key: string]: any;
  };
}

const LinksTab: React.FC<IProps> = ({ info }) => {
  return (
    <div className={styles["links-tab-container"]}>
      <img
        src={info.image.large}
        alt={info.name}
        className={styles["links-tab__icon"]}
      />
      {info.links.homepage[0] ? (
        <a
          href={info.links.homepage[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          Homepage
        </a>
      ) : null}
      {info.links.official_forum_url[0] ? (
        <a
          href={info.links.official_forum_url[0]}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["high-width-only"]}
        >
          Official Forum
        </a>
      ) : null}
      {info.links.subreddit_url ? (
        <a
          href={info.links.subreddit_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["high-width-only"]}
        >
          Subreddit
        </a>
      ) : null}
      {info.links.repos_url.github[0] ? (
        <a
          href={info.links.repos_url.github[0]}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["high-width-only"]}
        >
          Github
        </a>
      ) : null}
      {info.links.twitter_screen_name ? (
        <a
          href={`https://twitter.com/${info.links.twitter_screen_name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      ) : null}
    </div>
  );
};

export default LinksTab;
