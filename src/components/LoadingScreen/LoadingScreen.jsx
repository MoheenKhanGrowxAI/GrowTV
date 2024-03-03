import React from "react";
import { motion } from "framer-motion";
import "./LoadingScreen.css";

function LoadingScreen({}) {
  return (
    <div className={`loading-screen`}>
      <motion.img
        initial={{
          position: "absolute",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          position: "absolute",
          left: "15%",
          top: "7%",
          x: "-50%",
          y: "-50%",
          scale: 0.5,
          opacity: 0.1,
        }}
        transition={{ duration: 1, delay: 1 }}
        src="./images/hgx-logo.png"
        alt="HGX TV LOGO"
        className="img-fluid"
        width={"300px"}
      />
    </div>
  );
}

export default LoadingScreen;
