import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

//Components
import ScrollForMore from "../components/scrollForMore";
import RoadMap from "./RoadMap";
import Video from "./Video";
import Team from "./Team";
import Footer from "./Footer";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <>
      <motion.div
        onAnimationComplete={() => setCanScroll(true)}
        className="single"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="container fluid">
          <div className="row center top-row">
            <div className="top">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1.2, ...transition },
                }}
                className="details"
              >
                <div className="location">
                  <span>40.721740</span>
                  <span>-73.983350</span>
                </div>
                <div className="mua">DEV: @wonjungsong</div>
              </motion.div>
              <motion.div className="model">
                <motion.span className="first" variants={firstName}>
                  <motion.span variants={letter}>S</motion.span>
                  <motion.span variants={letter}>u</motion.span>
                  <motion.span variants={letter}>n</motion.span>
                  <motion.span variants={letter}>d</motion.span>
                  <motion.span variants={letter}>a</motion.span>
                  <motion.span variants={letter}>e</motion.span>
                  <motion.span variants={letter}>.</motion.span>
                </motion.span>
                <motion.span className="last" variants={lastName}>
                  <motion.span variants={letter}>S</motion.span>
                  <motion.span variants={letter}>c</motion.span>
                  <motion.span variants={letter}>h</motion.span>
                  <motion.span variants={letter}>o</motion.span>
                  <motion.span variants={letter}>o</motion.span>
                  <motion.span variants={letter}>l</motion.span>
                </motion.span>
              </motion.div>
            </div>
          </div>
          <div className="row bottom-row">
            <div className="bottom">
              <motion.div className="image-container-single">
                <motion.div
                  className="thumbnail-single"
                  initial={{
                    y: "-50%",
                    width: imageDetails.width,
                    height: imageDetails.height,
                  }}
                  animate={{
                    y: 0,
                    width: "100%",
                    //속 이미지 높이
                    // height: window.innerWidth > 1440 ? 800 : 600,
                    transition: { delay: 0.2, ...transition },
                  }}
                >
                  <motion.div
                    className="frame-single"
                    whileHover="hover"
                    transition={transition}
                  >
                    <motion.img
                      src={require("../images/1.jpg")}
                      alt="an image"
                      style={{ scale: scale }}
                      //속 이미지 확대 크기
                      initial={{ scale: 1.0 }}
                      animate={{
                        transition: { delay: 0.2, ...transition },
                        //속 이미지 위치
                        y: window.innerWidth > 1440 ? -1200 : -500,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <ScrollForMore />
          </div>
        </div>
        <div className="detailed-information">
          <div className="container">
            <div className="row">
              <h2 className="title">
                Minimum GPA required for
                <br /> matriculation is 4.20
              </h2>
              <p>
                Sundae School is a craft cann@bi$ brand and a smoke₩ear label
                born in Seoul and raised in California. We imagine an alternate
                green, hazy universe where God in her highest inhales and
                exhales to create the world. Our mission is to globalize
                [redacted] by serving great, reliable highs and illustrating
                narratives that contextualize and de-stigmatize the plant.
                <br />
                <br />
                We are a team of product-oriented, mission-driven creatives and
                midnight tokers. As a team comprised of immigrants, LGBTQIA+,
                and people of color, we are committed to building an industry
                and community that reflects everyone, not just the lucky few. In
                line with our commitment to diversity and equity, we donate 1%
                of our sales through Beam, and work specifically with minority
                owned businesses - from equity-owned flower businesses in
                California to garment factories hiring the single-parents in
                Seoul. We make it a priority to partner with people and brands
                who reflect our ideals.
                <br />
                <br /> Sundae School is not just a team of creatives and an
                array of products. Our community of honor rollers around the
                world are the true inspiration behind the brand. Join us on our
                discord channel or just dm us on our instagram for any questions
                regarding enrollment. Please check the 10 commandments of Sundae
                School prior to joining to learn more about our values.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <RoadMap />
      <Video />
      <Team />
      <Footer/>
    </>
  );
};

export default Model;
