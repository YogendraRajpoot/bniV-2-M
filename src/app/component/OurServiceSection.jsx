import React from "react";
import styles from "./style/ourservicesection.module.css";

const OurServiceSection = ({ item, itemKey, i }) => {
  return (
    <div className={i % 2 === 0 ? styles.bgLight : styles.bgWhite}>
      <section id="core-services" className={styles.coreServicesSection}>
        <p className={styles.label}>{itemKey}</p>
        <h2>{item.title}</h2>
        <div className={styles.imageBox}>
          <img
            src="https://images.pexels.com/photos/866398/pexels-photo-866398.jpeg"
            alt="Talent Solution Image"
          />
          <div className={styles.imageOverlay}>{item.on_image_desc}</div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2>{item.desc}</h2>
        <div className={styles.grid1}>
          {item.talentSolutionServices.map(([title, desc], i) => (
            <div className={styles.card} key={i}>
              <h4>{title}</h4>
              <p>{desc}</p>
              <div className={styles.arrow}>→</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServiceSection;
