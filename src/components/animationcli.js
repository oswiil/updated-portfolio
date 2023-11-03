"use client";
import React, { useRef } from "react";

import Lottie from "lottie-react";
import dino from "@/assets/dinoloop.json";

const AnimationCli = () => {
  const container = useRef();

  return <Lottie animationData={dino}></Lottie>;
  // return <container onMouseEnter={handlePlay} onMouseLeave={handleStop} />;
};

export default AnimationCli;
