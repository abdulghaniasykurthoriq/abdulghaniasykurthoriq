'use client';
import React, { useEffect} from 'react'
import Layout from '../components/Layout';
import Image from 'next/image';
import PortofolioData from '../data/portofolio.json';
import 'aos/dist/aos.css';

function Portofolio() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('Running AOS.init()');
  //     AOS.init();
  //   }, 100); // Penundaan 100 milidetik
  // }, []);
  

  return (
    <Layout>
        <div className='flex flex-wrap justify-center '>
        {PortofolioData.map((item,index) => {
          return (
            <div 
            
            
            key={index} className="max-w-sm w-full md:max-w-[300px] m-2 cursor-pointer flex flex-col projects-center md:projects-start md:justify-center" style={{ opacity: 1, transform: 'none' }}>
            <a href="#" target="_blank" className="w-full relative rounded-xl border-gray-700 dark:border-gray-400 border p-2 cursor-not-allowed  hover:border-gray-400 will-change-projectCard">
              <div style={{ transform: 'none' }}>
              <Image
              data-aos-delay="300"
              data-aos="zoom-in-up"
              data-aos-duration={`${index+2}00`}
              className='w-full md:w-[100]'
                        src="/portofolio1.jpeg" // Sesuaikan dengan path relatif gambar di dalam folder `public`
                        alt="Avatar"
                        width={150}
                        height={70}
                        priority={false}
                        // layout="responsive"
                      />
              </div>
            </a>
            <div className="w-full mt-5 ">
              <div className="flex projects-center justify-between">
                <a href="https://publiccode-phi.vercel.app/" target="_blank">
                  <h3 className="text-lg font-bold cursor-not-allowed">Codepublic</h3>
                </a>
                <div className="space-x-2 flex items-center cursor-not-allowed">
                  
                </div>
              </div>
              <p className="text-fun-gray text-left text-sm">codepublic is a website that provides website creation services</p>
              <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
                <li><div className="m-1 rounded-lg text-sm bg-gray-400 text-white py-1 px-2 cursor-not-allowed hover:opacity-75">NextJS</div></li>
                <li><div className="m-1 rounded-lg text-sm bg-gray-400 text-white py-1 px-2 cursor-not-allowed hover:opacity-75">TailwindCSS</div></li>
                <li><div className="m-1 rounded-lg text-sm bg-gray-400 text-white py-1 px-2 cursor-not-allowed hover:opacity-75">Swiperjs</div></li>
              </ul>
            </div>
          </div>
          );
        })}
          

        </div>

    </Layout>
  )
}

export default Portofolio