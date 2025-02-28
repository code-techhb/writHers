import styles from "./Card.module.css";
import { useState } from "react";

const Card = (props) => {
  const [showQuote, setShowQuote] = useState(false);

  // Function when button is clicked
  const handleShowQuote = () => {
    setShowQuote(!showQuote);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgBox}>
        <img
          src={props.coverImage}
          alt={`${props.title} book cover`}
          className={styles.coverImage}
        />
      </div>

      <div className={styles.description}>
        <h3>{props.title}</h3>
        <p>{props.author}</p>

        <div className={styles.tagsWrapper}>
          <span>Read in: {props.language}</span>
          <span>Translated: {props.translated ? "Yes" : "No"}</span>
          <span>Genre: {props.genre}</span>
        </div>
        <button onClick={handleShowQuote}>
          {showQuote ? "Hide Quote" : "One of my Favorite Quotes from the book"}
        </button>
        {showQuote && <p className={styles.quote}>{props.quote}</p>}
      </div>
    </div>
  );
};

export default Card;
