import styles from "./About.module.css";
import girlReading from "../assets/girl_Reading.jpg";
const About = () => {
  return (
    <>
      <div className={styles.sectionContainer}>
        <p className={styles.tagline}>
          <span>WritHer</span>,<br /> Books written by women
        </p>

        <div className={styles.aboutBox}>
          <img
            src={girlReading}
            alt="AI Generated Image of a Black Hijabi girl reading a book in cozy environment"
          />

          <div className={styles.description}>
            <h2>Why WritHer?</h2>
            <p>
              Leisure reading has always been one of my greatest joys. I won’t
              claim to have read hundreds of books, but I have explored many,
              written by authors from diverse backgrounds. Yet, there’s
              something uniquely special about books written by women. Their
              words feel more intimate, their stories more resonant. Each page
              wraps me in warmth, fills my heart, soothes my mind, and makes the
              world around me feel a little cozier. Whether a{" "}
              <strong>writHers</strong> is sharing her childhood memories,
              teenage years, first steps into adulthood, career struggles,
              spirituality, motherhood, love, trials, entrepreneurship, or even
              her scientific and political pursuits—her story carries an
              undeniable magic. It speaks to the girl I once was, empowers the
              young woman I am today, and shapes the woman I am becoming. So
              today, I invite you to discover the incredible voices of these
              **WritHers**—because their words are more than just stories; they
              are journeys through the beauty, strength, and resilience of
              everyday life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
