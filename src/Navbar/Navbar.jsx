import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h1 className={`${styles.logo}`}>WritHer</h1>
      <ul className={styles.linksContainer}>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert(
                "Feature coming very sooon! I got some more things to learn first 🤓 "
              );
            }}
          >
            Filter
          </a>
        </li>
        <li>
          <a href="https://docs.google.com/forms/d/1IxfyGef6CZn7iU9bBaUIVxOQFyKGqYAtVqlsvqFXurw/edit">
            Recommend me a Book
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
