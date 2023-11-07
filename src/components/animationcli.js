"use client";
import React, { useRef, useState } from "react";

import Lottie, { LottiePlayer } from "lottie-react";

const AnimationCli = ({ data, styles }) => {
  const container = useRef();
  const handleMouseLeave = () => {
    LottiePlayer.setSpeed(1);
  };
  const handleMouseEnter = () => {
    LottiePlayer.setSpeed(5);
  };
  return (
    <Lottie
      style={styles}
      lottieRef={container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animationData={data}
      autoplay
      loop
    ></Lottie>
  );
};

export default AnimationCli;
