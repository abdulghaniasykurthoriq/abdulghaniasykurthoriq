"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "./components/Layout";
import Lottie from "lottie-react";
import animationData from "../public/animation/developer.json";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Cek apakah pengguna sudah melihat splash screen
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (!hasSeenSplash) {
      // Jika belum melihat splash screen, tampilkan splash screen
      setTimeout(() => {
        setMounted(true);
        sessionStorage.setItem("hasSeenSplash", "true");
      }, 4000); // Ganti angka ini dengan durasi splash screen yang diinginkan (dalam milidetik)
    } else {
      // Jika sudah melihat splash screen, langsung set mounted ke true
      setMounted(true);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-center items-center bg-white w-screen h-screen">
        <div>
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
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

  return (
    <Layout>
      {/* Konten utama aplikasi */}
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="flex justify-center items-center"
      >
        <div className="avatar">
          <div className="w-28 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-2">
            <Image src="/agat.jpeg" alt="Avatar" width={500} height={500} />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col md:ml-8 justify-center"
        >
          <h1 className="text-xl md:text-3xl text-blueGray dark:text-white mt-8 md:mt-0 text-center ml-6 mr-6 md:ml-0 md:mr-0 md:text-start font-regular mb-4">
            Hello, I&apos;m Agat
          </h1>
          <p className="text-base md:text-xl text-blueGray dark:text-white flex font-regular place-self-center md:place-self-start">
            <span className="text-blue">Software</span>&nbsp;Engineer
          </p>
          <div className="flex ml-5 md:ml-0 mt-3">
            <a
              className="mx-1"
              href="https://www.linkedin.com/in/abdul-ghani-asykur-thoriq-5a74241a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <Image
                src="/icon/linkedin.png"
                alt="Avatar"
                width={25}
                height={25}
              />
            </a>
            <a
              className="mx-1"
              href="https://github.com/abdulghaniasykurthoriq"
              target="_blank"
            >
              <Image
                src="/icon/github.png"
                alt="Avatar"
                width={25}
                height={25}
              />
            </a>
            <a
              className="mx-1"
              href="mailto:agatinfo17@gmail.com"
              target="_blank"
            >
              <Image
                src="/icon/gmail.png"
                alt="Avatar"
                width={25}
                height={25}
              />
            </a>
            {/* <a className="mx-1" href="https://www.tiktok.com/@khilapjir?_t=8jGOkpuHtKx&_r=1" target="_blank">
              <Image
                  src="/icon/tiktok.png"
                  alt="Avatar"
                  width={25}
                  height={25}
              />
            </a> */}
            {/* <a className="mx-1" href="https://youtube.com/@agat1?si=FtezbMB7os9IOtiN" target="_blank">
              <Image
                  src="/icon/youtube.png"
                  alt="Avatar"
                  width={25}
                  height={25}
              />
            </a> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
