import styles from './style/helpsection.module.css';

export default function HelpSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaOverlay}></div>
      <div className={styles.ctaContent}>
        <h2>
          What can we help you achieve?<br />
          <span>See how we can help.</span>
        </h2>
        <button>Work With Us</button>
      </div>
    </section>
  );
}
