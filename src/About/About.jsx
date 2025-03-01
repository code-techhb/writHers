import styles from "./About.module.css";
import girlReading from "../assets/girl_Reading.jpg";

const About = () => {
  const scrollToNextSection = () => {
    document
      .getElementById("collection-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.sectionContainer}>
      {/* header */}
      <div className={styles.heroContent}>
        <h2 className={styles.tagline}>
          <span className={styles.brandName}>WritHer</span>
          <span className={styles.taglineSeparator}></span>
          <span className={styles.taglineText}>Books written by women</span>
        </h2>

        {/* about */}
        <div className={styles.aboutBox}>
          <div className={styles.imageWrapper}>
            <img
              src={girlReading}
              alt="Black Hijabi girl reading a book in a cozy environment"
              className={styles.heroImage}
            />
          </div>

          <div className={styles.description}>
            <h2 className={styles.descriptionTitle}>
              Why <span className="brandName">WritHer</span>?
            </h2>
            <p>
              Leisure reading has always been one of my greatest joys. I won't
              claim to have read hundreds of books, but I have explored many,
              written by authors from diverse backgrounds. And yet, there's
              something uniquely special about books written by women. Their
              words feel more intimate, their stories more resonant.
            </p>
            <p>
              Each page wraps me in warmth, fills my heart, soothes my mind, and
              makes the world around me feel a little cozier. Whether a{" "}
              <span className={styles.highlight}>writHer</span> is sharing her
              childhood memories, teenage years, first steps into adulthood,
              career struggles, spirituality, marriage, motherhood, trials,
              entrepreneurship, or even her scientific and political
              pursuits—her story carries an undeniable magic. It speaks to the
              teenage girl I once was, empowers the young woman I am today, and
              shapes the woman I am becoming.
            </p>
            <p className={styles.callToAction}>
              Join me in discovering the incredible voices of these{" "}
              <span className={styles.highlight}>WritHers</span>—because their
              words are more than just stories; they are journeys through the
              beauty, strength, and resilience of everyday life.
            </p>
            <button className={styles.ctaBtn} onClick={scrollToNextSection}>
              Dive in &darr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
