import React from "react";
import styles from "./Work.module.css";
import img1 from "../../images/karan.jpg";
import img2 from "../../images/dyou.jpg";
import img3 from "../../images/ac.jpg";
import img4 from "../../images/cs.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Work = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Featured exclusives</h2>
        <p>From our team of creatives.</p>
      </div>
      <div className={styles.projects}>
        <div className={styles.projects_container}>
          <a
            href="https://www.youtube.com/watch?v=I8QWBFDMT5A"
            className={styles.box}
          >
            <img src={img1} alt="cover" />
            <div className={styles.cta}>
              <p>Tumarei hahi</p>
              <div className={styles.links}>
                <a href="https://open.spotify.com/track/14CR9CwvpIrfpW9YNoOnNs?si=b5ddcb3e55234188">
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
                <a href="https://www.youtube.com/watch?v=I8QWBFDMT5A">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </a>
          <a
            href="https://www.youtube.com/watch?v=-6HoMtV-KGk"
            className={styles.box}
          >
            <img src={img2} alt="cover" />
            <div className={styles.cta}>
              <p>Dithokot xopun</p>
              <div className={styles.links}>
                <a href="https://open.spotify.com/track/4DzAfEwZKtUIOG4wJSbGhq?si=dc459278d5464f8f">
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
                <a href="https://www.youtube.com/watch?v=-6HoMtV-KGk">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.projects_container}>
          <a
            href="https://www.youtube.com/watch?v=mQ1PS78tAHM"
            className={styles.box}
          >
            <img src={img3} alt="cover" />
            <div className={styles.cta}>
              <p>Tumarei hahi - acoustic</p>
              <div className={styles.links}>
                <a href="https://open.spotify.com/track/3wm2QpVzpkuonYnVbWKYXL?si=a82f91f64ce043c5">
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
                <a href="https://www.youtube.com/watch?v=mQ1PS78tAHM">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/niorr.in/" className={styles.box}>
            <img src={img4} alt="cover" />
          </a>
        </div>
      </div>

      <div className={styles.socials}>
        <p>Copyright © niorr.</p>
        <p className={styles.location}>
          <FontAwesomeIcon className={styles.globe} icon={faGlobe} />
          IND
        </p>
        <a href="https://www.instagram.com/niorr.in/">Instagram</a>
        <a href="https://www.linkedin.com">LinkdIn</a>
      </div>
    </section>
  );
};

export default Work;
