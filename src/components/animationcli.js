"use client";
import React, { useRef, useState } from "react";

import Lottie, { LottiePlayer } from "lottie-react";
import dino from "@/assets/dinoloop.json";

const AnimationCli = () => {
  const container = useRef();
  const handleMouseLeave = () => {
    LottiePlayer.setSpeed(1);
  };
  const handleMouseEnter = () => {
    LottiePlayer.setSpeed(3);
  };
  return (
    <Lottie
      lottieRef={container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animationData={dino}
      autoplay
      loop
    ></Lottie>
  );
};

export default AnimationCli;
