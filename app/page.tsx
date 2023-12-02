import Image from "next/image";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div style={{ height: 'calc(100vh - 70px)' }} className=" flex justify-center items-center ">
        <div className="avatar">
          <div className="w-28 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-2">
            {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
            <Image
              src="/avatar.jpeg" // Sesuaikan dengan path relatif gambar di dalam folder `public`
              alt="Avatar"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex flex-col md:ml-8 justify-center">
          <h1 className="text-xl md:text-3xl text-blueGray dark:text-white mt-8 md:mt-0 text-center ml-6 mr-6 md:ml-0 md:mr-0 md:text-start font-regular mb-4">Hello, I'm
          Agat </h1>
          <p className="text-base md:text-xl text-blueGray dark:text-white flex font-regular place-self-center md:place-self-start">
            <span className="text-blue">Software</span>&nbsp;Engineer</p>
          </div>
      </div>
    </Layout>
  )
}

