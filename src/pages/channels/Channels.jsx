import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "./Channels.css";
import { Context } from "../../Context";

function Channels() {
  const [context, setContext] = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      setContext(true);
    }, 1000);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    vertical: true,
    fade: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src="./images/right-arrow.png" alt="left" className="img-fluid" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src="./images/left-arrow.png" alt="left" className="img-fluid" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        position: context ? "absolute" : "inherit",
        right: context ? "-100%" : 0,
      }}
      animate={{
        position: "relative",
        right: 0,
      }}
      transition={{ duration: 1 }}
      className="channel-page body-wrapper"
      style={{ backgroundImage: `url("./images/BANNER2.png")` }}
    >
      <div className="banner-content">
        <Slider {...settings}>
          <div className="channel-slider">
            <Container>
              <div className="row">
                <div className="col-md-5">
                  <img
                    src="./images/channel-banner.jpg"
                    alt="Channel banner"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-5 align-self-center">
                  <h1 className="mt-md-0 mt-3">HEADING</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standar dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </Container>
          </div>
          <div className="channel-slider">
            <Container>
              <div className="row">
                <div className="col-md-5">
                  <img
                    src="./images/channel-banner2.png"
                    alt="Channel banner"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-5 align-self-center">
                  <h1 className="mt-3">HEADING</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standar dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </Slider>
      </div>
    </motion.div>
  );
}

export default Channels;
