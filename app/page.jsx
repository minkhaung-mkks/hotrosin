"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import { useCart } from "@/context/cartContext";

export default function Home() {

  const {addToCart} = useCart()

  const [scrollLocked, setScrollLocked] = useState(false);
  const [funFact, setFunFact] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [switchImg, setSwitchImg] = useState(false);

  const [variant, setVariant] = useState("sapphire");

  // Ref to store section elements
  const sectionsRef = useRef([]);

  const handleScroll = (e) => {
    console.log('asdasd')
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

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (scrollLocked) return;

    const touchEndY = e.touches[0].clientY;
    const touchDeltaY = touchStartY - touchEndY;

    if (touchDeltaY > 50) {
      // Swiping up
      if (currentSection < sectionsRef.current.length - 1) {
        setScrollLocked(true);
        setCurrentSection((prev) => prev + 1);
        scrollToSection(currentSection + 1);
      }
    } else if (touchDeltaY < -50) {
      // Swiping down
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
      setTimeout(() => setScrollLocked(false), 800); // Adjust time to match animation
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [scrollLocked, currentSection, touchStartY]);

  useEffect(() => {
    setCurrentSection(0);
  }, []);

  useEffect(() => {
    if (currentSection == 2 || currentSection == 3) {
      setTimeout(() => {
        setSwitchImg(true);
      }, 100);
    } else {
      if (switchImg) setSwitchImg(false);
    }
  }, [currentSection, switchImg]);
  
  const handleScrollClick = (c)=>{
    setCurrentSection(c)
    scrollToSection(c)
  }

  const handleAddItem = ()=>{
    const item = {name : "hot rosin knife",variant : variant, price: 8888,img:'/imgs/knife_nobg_r.png',count:1}
    addToCart(item)
  }

  return (
    <div
      style={{
        overflow: scrollLocked ? "hidden" : "auto",
        position: "relative",
      }}
      className="hero_main"
    >
      <div className="scroll_progress">
        <button
          onClick={() => handleScrollClick(0)}
          className={`scroll_bullet ${
            currentSection == 0 ? "scroll_bullet_active" : ""
          }`}
        ></button>
        <button
          onClick={() => handleScrollClick(1)}
          className={`scroll_bullet ${
            currentSection == 1 ? "scroll_bullet_active" : ""
          }`}
        ></button>
        <button
          onClick={() => handleScrollClick(2)}
          className={`scroll_bullet ${
            currentSection == 2 ? "scroll_bullet_active" : ""
          }`}
        ></button>
        <button
          onClick={() => handleScrollClick(3)}
          className={`scroll_bullet ${
            currentSection == 3 ? "scroll_bullet_active" : ""
          }`}
        ></button>
        <button
          onClick={() => handleScrollClick(4)}
          className={`scroll_bullet ${
            currentSection == 4 ? "scroll_bullet_active" : ""
          }`}
        ></button>
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
          src={
            switchImg ? "/imgs/knife_nocap_nobg.png" : `/imgs/knife_nobg.png`
          }
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

          <span>
            fun fact{" "}
            <button className="funFactBtn" onClick={() => setFunFact(!funFact)}>
              i
            </button>{" "}
          </span>
          <br />
          <br />
          {funFact && (
            <span>
              quartz is also known in many different cultures and eras for its
              healing proprieties and greatly fascinated the great scientist and
              energy researcher nikola tesla !
            </span>
          )}
        </div>
      </div>
      <div
        className={`${styles.second_box} ${styles.section} ${
          currentSection === 2 ? styles.visible : styles.visible
        }`}
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <span className={`floatingText `}>
          <div
            className={`fLine ${currentSection != 2 ? "" : "fLineActive"}`}
          ></div>
          <span className={`${currentSection != 2 ? "inactive" : "x"}`}>
            Quartz tip
          </span>{" "}
        </span>
        <span className={`floatingText gemInlaid `}>
          <div
            className={`fLine ${currentSection != 2 ? "" : "fLineActive"}`}
          ></div>
          <span className={`${currentSection != 2 ? "inactive" : "x"}`}>
            Quartz tip
          </span>
        </span>
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
              <h2>$8888</h2>
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
            <div className="product_variants">
              <button className="variant_highlight">
                red spinel
              </button>
              <button className="variant_highlight">
                pink jade
              </button>
              <button className="variant_highlight">
                green spinel
              </button>
            </div>
            <div className={`${styles.product_divider}`}></div>
            <div className="product_pm">
              <img src="/imgs/bbl.jpg" alt="" />
              <img src="/imgs/prompt_pay.png" alt="" />
            </div>
            <button onClick={handleAddItem} className="addCartBtn">add to cart</button>
            <div className={`${styles.product_divider}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
