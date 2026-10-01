"use client";

import Lottie from "lottie-react";
import animationData from "../../public/animation/developer.json";

export default function Splash() {
  return (
    <div className="flex justify-center items-center bg-white w-screen h-screen">
      <div>
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: 200, height: 200 }}
        />
        <h1 data-aos="fade-up" data-aos-duration="3000">
          don&apos;t worry
          <br /> i&apos;m here to be your friend
        </h1>
      </div>
    </div>
  );
}
