import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./style/casestudysection.module.css";

const caseStudies = [
  {
    title: "Simplifying Digital Identification System",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "image/bannerbni.jpeg",
  },
  {
    title: "Transforming Customer Service Experience",
    description:
      "Our team implemented an AI-driven chat system, drastically reducing response time and improving user satisfaction.",
    image: "image/bannerbni.jpeg",
  },
  {
    title: "Enhancing E-Commerce Logistics",
    description:
      "We streamlined logistics for an e-commerce platform, boosting delivery efficiency by 40% within 3 months.",
    image: "image/bannerbni.jpeg",
  },
];

export default function CaseStudySection() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.contentGrid}>
        {/* Text Content */}
        <div>
          <h4 className={styles.subheading}>Case Study</h4>
          <h2 className={styles.heading}>
            {caseStudies[current].title.split(" ").slice(0, 2).join(" ")} <br />
            {caseStudies[current].title.split(" ").slice(2).join(" ")}
          </h2>
          <p className={styles.description}>
            {caseStudies[current].description}
          </p>
          <button className={styles.button}>Read More</button>

          <div className={styles.navigation}>
            <FaArrowLeft
              className="text-xl cursor-pointer"
              onClick={prevSlide}
            />
            <FaArrowRight
              className="text-xl cursor-pointer"
              onClick={nextSlide}
            />
            <span className="text-sm font-medium">
              {`0${current + 1}`} / 0{caseStudies.length}
            </span>
          </div>
        </div>

        {/* Carousel Image Slider */}
        <div className={styles.sliderWrapper} ref={sliderRef}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {caseStudies.map((cs, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.imageWrapper}>
                  <img
                    src={cs.image}
                    alt={`Case Study ${index + 1}`}
                    width={800}
                    height={500}
                    className={styles.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
