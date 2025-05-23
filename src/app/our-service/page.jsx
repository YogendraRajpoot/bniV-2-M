"use client";
import Head from "next/head";
import CaseStudySection from "../component/CaseStudySection";
import OurStrategy from "../component/OurStrategy";
import HelpSection from "../component/HelpSection";
import { ourServicesData } from "../constant/OurServicesData";
import styles from "./ourservices.module.css"; // CSS Module import
import OurServiceSection from "../component/OurServiceSection";

export default function OurServices() {
  return (
    <>
      <Head>
        <title>Our Services</title>
        <meta charSet="UTF-8" />
      </Head>
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>Our Services</h1>
          <div className={styles.breadCrumb}>
            <a>Home</a> <span>&gt;</span>
            <a>Our Services</a> <span>&gt;</span>
            <a>Talent Solution</a>
          </div>
        </div>
      </section>

      <section className={styles.section} id="What-we-do">
        <div className={styles.content}>
          <h5>WHAT WE DO?</h5>
          <h2>Excellent Services for Your Business</h2>
          <p>
            At Business Needs Inc. we specialize in Information Technology
            services and Talent solutions for companies globally. We believe
            that each client is unique, and there is no such thing as
            one-size-fits all in the world of technology. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchan publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
        </div>
        <div className={styles.sidebar}>
          <ul>
            <li>
              <a href="#What-we-do" className={styles.active}>
                What we do?
              </a>
            </li>
            <li>
              <a href="#Our-Core-Services">Our Core Services</a>
            </li>
            <li>
              <a href="#Our-Strategy">Our Strategy</a>
            </li>
            <li>
              <a href="#Case-Study">Case Study</a>
            </li>
          </ul>
        </div>
      </section>
      <div id="Our-Core-Services">
        {Object.entries(ourServicesData).map(([itemKey, item], i) => (
          <OurServiceSection item={item} itemKey={itemKey} key={i} i={i} />
        ))}
      </div>
      <div id="Our-Strategy">
        <OurStrategy />
      </div>
      <div id="Case-Study">
        <CaseStudySection />
      </div>
      <HelpSection />
    </>
  );
}
