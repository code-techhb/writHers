import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h1>WritHer</h1>
      <ul className={styles.linksContainer}>
        <li>About</li>
        <li>Filter</li>
        <li>Random Rec</li>
        <li>Suggest a book</li>
      </ul>
    </nav>
  );
};

export default Navbar;
