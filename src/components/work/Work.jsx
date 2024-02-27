import React from "react";
import styles from "./Work.module.css";
import video1 from "../../images/video1.mp4";
import video2 from "../../images/video2.mp4";
import video3 from "../../images/video3.mp4";
import img1 from "../../images/karan.jpg";
import img2 from "../../images/dyou.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Featured exclusives</h2>
        <p>From our team of creatives.</p>
      </div>
      <div className={styles.projects_container}>
        <a href="" className={styles.box}>
          <img src={img1} alt="" />
        </a>
        <a href="" className={styles.box}>
          <img src={img2} alt="" />
        </a>
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
