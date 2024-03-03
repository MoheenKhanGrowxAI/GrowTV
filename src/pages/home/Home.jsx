import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./home.css";
import { Context } from "../../Context";
import VideoModal from "../../components/VideoModal/VideoModal";

function Home() {
  const [context, setContext] = useContext(Context);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContext(true);
    }, 1000);
  }, []);

  return (
    <motion.div
      initial={{
        position: context ? "absolute" : "inherit",
        left: context ? "-100%" : 0,
      }}
      animate={{
        position: "relative",
        left: 0,
      }}
      transition={{ duration: 1 }}
      className="home-page body-wrapper"
      style={{ backgroundImage: `url("./images/BANNER1.png")` }}
    >
      <motion.div
        initial={{
          opacity: !context ? 0.1 : 1,
          y: !context ? 100 : 0,
        }}
        whileInView="visible"
        viewport={{ once: true }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1.2, delay: 1 }}
        className="banner-content"
      >
        <Container>
          <div className="row">
            <div className="col-md-auto">
              <div className="heading">
                <h1 className="hgxtv">HGXTV</h1>
                <h1 className="podcast">PODCAST</h1>
              </div>
              <p>
                Welcome to HGXTV, your go-to destination for captivating
                stories, <br /> enlightening conversations, and engaging
                discussions. Join us as <br /> we embark on an exciting journey
                through the realms of <br /> knowledge, inspiration, and
                personal growth.
              </p>
            </div>
          </div>
        </Container>
      </motion.div>
      {/* recent videos */}
      <motion.div
        initial={{
          opacity: !context ? 0.1 : 1,
          x: !context ? "80%" : 0,
        }}
        viewport={{ once: true }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1.2, delay: 1 }}
        className="recent-videos-wrapper"
      >
        <Container>
          <h2>RECENT VIDEOS</h2>
          <div className="videos-scroll-section">
            <div className="video-section">
              <div className="video-thumbnail">
                <div
                  className="play-btn"
                  onClick={() => {
                    setShowVideoModal(true);
                  }}
                >
                  <img
                    src="./images/play-btn.png"
                    alt="thumbnail play btn"
                    className="img-fluid"
                  />
                </div>
                <img
                  src="./images/video1.png"
                  alt="thumbnail"
                  className="img-fluid thumbnail"
                />
              </div>
              <div className="video-info">
                <p className="description">
                  Plant Growth and development at home
                </p>
                <p className="duration">2:30:10</p>
              </div>
            </div>
            <div className="video-section">
              <div className="video-thumbnail">
                <div
                  className="play-btn"
                  onClick={() => {
                    setShowVideoModal(true);
                  }}
                >
                  <img
                    src="./images/play-btn.png"
                    alt="thumbnail play btn"
                    className="img-fluid"
                  />
                </div>
                <img
                  src="./images/video2.png"
                  alt="thumbnail"
                  className="img-fluid thumbnail"
                />
              </div>
              <div className="video-info">
                <p className="description">
                  Pro's and con's of growing plants at home Plant Growth and
                  development at home
                </p>
                <p className="duration">2:30:10</p>
              </div>
            </div>
            <div className="video-section">
              <div className="video-thumbnail">
                <div
                  className="play-btn"
                  onClick={() => {
                    setShowVideoModal(true);
                  }}
                >
                  <img
                    src="./images/play-btn.png"
                    alt="thumbnail play btn"
                    className="img-fluid"
                  />
                </div>
                <img
                  src="./images/video3.png"
                  alt="thumbnail"
                  className="img-fluid thumbnail"
                />
              </div>
              <div className="video-info">
                <p className="description">
                  How to grow medical cambia's and its features
                </p>
                <p className="duration">2:30:10</p>
              </div>
            </div>
            <div className="video-section">
              <div className="video-thumbnail">
                <div
                  className="play-btn"
                  onClick={() => {
                    setShowVideoModal(true);
                  }}
                >
                  <img
                    src="./images/play-btn.png"
                    alt="thumbnail play btn"
                    className="img-fluid"
                  />
                </div>
                <img
                  src="./images/video4.png"
                  alt="thumbnail"
                  className="img-fluid thumbnail"
                />
              </div>
              <div className="video-info">
                <p className="description">
                  Plant technology and evolution of growing at home
                </p>
                <p className="duration">2:30:10</p>
              </div>
            </div>
            <VideoModal
              show={showVideoModal}
              handleClose={() => {
                setShowVideoModal(false);
              }}
            />
          </div>
        </Container>
      </motion.div>
    </motion.div>
  );
}

export default Home;
