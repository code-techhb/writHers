import styles from "./Collection.module.css";
import books from "../booksData";
import Card from "../Card/Card";

const Collection = () => {
  // get books so you don't mutate the original array
  const getBooks = (arr) => {
    return arr;
  };

  const myBooks = getBooks(books);

  return (
    <section className={styles.collectionSection} id="collection-section">
      <h2> Books by WritHers I enjoyed reading</h2>

      <div className={styles.collectionGrid}>
        {myBooks.map((book, index) => (
          <Card
            key={index}
            title={book.title}
            author={book.author}
            coverImage={book.coverImage}
            language={book.language}
            translated={book.translated}
            genre={book.genre}
            quote={book.quote}
          />
        ))}
      </div>
    </section>
  );
};

export default Collection;
