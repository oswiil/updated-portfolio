"use client";
import React, { useState, useRef, useEffect } from "react";
import lottie from "lottie-web";
import dino from "@/assets/dinoloop.json";

export default function AnimationCli() {
  const [anim, setAnim] = useState();
  const container = useRef(null);

  useEffect(() => {
    const animObj = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: dino,
    });
    setAnim(animObj);

    const handleStop = () => {
      anim.stop();
    };

    const handlePlay = () => {
      anim.play();
    };

    return (
      <div
        ref={container}
        onMouseEnter={handlePlay}
        onMouseLeave={handleStop}
      />
    );
  });
}
