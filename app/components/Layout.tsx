'use client'
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from './navbar';
import AOS from 'aos';

const Particle = dynamic(() => import('./Particle'), { ssr: false });

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init();

  }, [])
  
  return (
    <div
      className={`flex flex-col relative mx-auto transition-colors duration-700 bg-white dark:bg-blueGray min-h-screen z-40`}
    >
      <Particle/>
      
      <Navbar />
      <div className="container mx-auto z-10">
        <main>{children}</main>
      </div>
    </div>
  );
}
