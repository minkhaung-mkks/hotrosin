"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Nav from "@/components/Nav";

export default function Home() {
  const [scrollLocked, setScrollLocked] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  // Ref to store section elements
  const sectionsRef = useRef([]);

  const handleScroll = (e) => {
    if (scrollLocked) return;

    if (e.deltaY > 0) {
      // Scrolling down
      if (currentSection < sectionsRef.current.length - 1) {
        setScrollLocked(true);
        setCurrentSection((prev) => prev + 1);
        scrollToSection(currentSection + 1);
      }
    } else {
      // Scrolling up
      if (currentSection > 0) {
        setScrollLocked(true);
        setCurrentSection((prev) => prev - 1);
        scrollToSection(currentSection - 1);
      }
    }
  };

  const scrollToSection = (index) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setScrollLocked(false), 2000); // Adjust time to match animation
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollLocked, currentSection]);
  useEffect(() => {
    setCurrentSection(0)
  }, [])
  

  return (
    <div
      style={{
        overflow: scrollLocked ? "hidden" : "auto",
        position: "relative",
      }}
    >

      <div className="scroll_progress">
        <div
          className={`scroll_bullet ${
            currentSection == 0 ? "scroll_bullet_active" : ""
          }`}
        ></div>
        <div className={`scroll_bullet ${
            currentSection == 1 ? "scroll_bullet_active" : ""
          }`}></div>
        <div className={`scroll_bullet ${
            currentSection == 2 ? "scroll_bullet_active" : ""
          }`}></div>
        <div className={`scroll_bullet ${
            currentSection == 3 ? "scroll_bullet_active" : ""
          }`}></div>
        <div className={`scroll_bullet ${
            currentSection == 4 ? "scroll_bullet_active" : ""
          }`}></div>
      </div>
      <div
        className={styles.section}
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <img
          className={`${styles.scroll_knife} ${
            currentSection == 0 ? styles.scroll_knife_h : ""
          } ${currentSection == 1 ? styles.scroll_knife_l : ""} ${
            currentSection == 2 ? styles.scroll_knife_l_r : ""
          } ${currentSection == 3 ? styles.scroll_knife_m_r : ""} ${
            currentSection == 4 ? styles.hidden : ""
          }`}
          src="/imgs/knife_nobg.png"
          alt=""
        />
        <div className={styles.hero_box}>
          <h2 className={styles.hero_txt}>hot.rosin.knife</h2>
        </div>
      </div>
      <div
        className={`${styles.second_box} ${styles.section} ${
          currentSection === 1 ? styles.visible : styles.hidden
        }`}
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="left_text">
          <span>
            hotrosinknife is then topped of with a high heat resistant full
            quartz carved knife that vibrates at the frequency of 32,763 hertz.
            It is then channeled with precious stones of the highest quality in
            the world.
          </span>
          <br />
          <br />
          <span>fun fact</span>
          <br />
          <br />
          <span>
            quartz is also known in many different cultures and eras for its
            healing proprieties and greatly fascinated the great scientist and
            energy researcher nikola tesla !
          </span>
        </div>
      </div>
      <div
        className={`${styles.second_box} ${styles.section} ${
          currentSection === 2 ? styles.visible : styles.visible
        }`}
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <h2 className={styles.hero_txt}>hot.rosin.knife</h2>
      </div>
      <div
        className={`${styles.second_box} ${styles.section} ${
          currentSection === 3 ? styles.visible : styles.visible
        }`}
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <h2 className={styles.hero_txt}>hot.rosin.knife</h2>
      </div>
      <div
        className={`${styles.second_box}  ${styles.section} ${
          currentSection === 4 ? styles.visible : styles.visible
        }`}
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <div className={`${styles.product_card}`}>
          <div className={`${styles.product_img_box}`}>
            <img src="/imgs/knife_nobg.png" alt="" />
          </div>
          <div className={`${styles.product_info_box}`}>
            <div className={`${styles.product_info_title}`}>
              <h2>hot rosin knife</h2>
              <h2>$500</h2>
            </div>
            <div className={`${styles.product_divider}`}></div>
            <div className={`${styles.product_info_description}`}>
              <p>
                hotrosinknife v1 is a rosin knife born through many clumsy
                instances of using a tiny rosin knife and burning my hand...
                <br />
                <br />
                the sheath of the rosin knife is inspired by a carved shape from
                the pyu kingdom over 2000 years ago of which I believe is a
                design that stands against the test of time.
              </p>
            </div>
            <div className={`${styles.product_divider}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
