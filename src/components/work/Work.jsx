import React from "react";
import styles from "./Work.module.css";
import video1 from "../../images/video1.mp4";
import video2 from "../../images/video2.mp4";
import video3 from "../../images/video3.mp4";
import img1 from "../../images/ye.jpeg";
import img2 from "../../images/lamar.jpeg";
import img3 from "../../images/kanye.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Featured Work</h2>
        <div className={styles.circles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
      <div className={styles.projects_container}>
        <div className={styles.box}>
          <img src={img1} alt="img" />
          <video autoPlay loop muted src={video1}></video>
        </div>
        <div className={styles.box}>
          <img src={img2} alt="img" />
          <video autoPlay loop muted src={video2}></video>
        </div>
        <div className={styles.box}>
          <img src={img3} alt="img" />
          <video autoPlay loop muted src={video3}></video>
        </div>
      </div>
      <div className={styles.socials}>
        <p>Copyright © niorr.</p>
        <p className={styles.location}>
          <FontAwesomeIcon className={styles.globe} icon={faGlobe} />
          IND
        </p>
        <p>Instagram</p>
        <p>LinkdIn</p>
      </div>
    </section>
  );
};

export default Work;
