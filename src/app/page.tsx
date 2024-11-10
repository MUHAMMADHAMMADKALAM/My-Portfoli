"use client";

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import ContactUs from "./contact-us/page";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";



export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  } , []);


  return (
    <main className=" justify-around pt-1">
      <section className="mt-40 mx-10 md:mx-14 md:flex-row justify-around flex flex-col-reverse ">

        {/* Text Section */}
        <div className="text-white text-center mt-16 md:mt-20 md:text-left justify-around ">

          <h4 className=" mb-4 font-semi-bold text-xl sm:text-2xl md:text-3xl text-white" data-aos="zoom-in-up">Hi There, </h4>

          {/* Typing efect */}
          <TypeAnimation className=" text-2xl sm:text-3xl md:text-4xl  font-extrabold text-yellow-500"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I'm Sheikh Hammad",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              // 'We produce food for Hamsters',
              // 1000,
              // 'We produce food for Guinea Pigs',
              // 1000,
              // 'We produce food for Chinchillas',
              // 1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '', display: 'inline-block', }}
            repeat={Infinity}
          />
          <h4 className="mt-4 font-medium text-lg sm:text-xl md:text-2xl text-white" data-aos="zoom-in-up">Web-Developer.</h4>


          <a href="/images/pdf-cv.pdf" target="blank">
            <button data-aos="zoom-in-up" type="button" className="bg-yellow-500 text-white rounded-xl py-2 px-4 font-semibold mt-8 hover:border-2 border-white">Download CV</button>

          </a>

          <div data-aos="zoom-in-up" className="flex gap-7 py-10 justify-center md:justify-start ">
            <a className="" href="https://github.com/MUHAMMADHAMMADKALAM" target="blank"><Image className="hover:border-2 border-white rounded-full shadow-lg hover:shadow-slate-600" src="/logo/github.webp" alt="logo" width={'40'} height={'40'} /></a>
            <a className="" href="https://www.facebook.com/profile.php?id=61555985446463" target="blank"><Image className="hover:border-2 border-white rounded-full shadow-lg hover:shadow-slate-600" src="/logo/Facebook.png" alt="logo" width={'40'} height={'40'} /></a>
            <a className="" href="https://www.facebook.com/profile.php?id=61555985446463" target="blank"><Image className="hover:border-2 border-white rounded-full shadow-lg hover:shadow-slate-600" src="/logo/instagram.jpeg" alt="logo" width={'40'} height={'40'} /></a>
            <a className="" href="https://www.linkedin.com/in/sheikh-hammad-4771202b5/" target="blank"><Image className="hover:border-2 border-white rounded-full shadow-lg hover:shadow-slate-600" src="/logo/linkedin.webp" alt="logo" width={'40'} height={'40'} /></a>
          </div>

        </div>

        {/* Image Section */}
        <div data-aos="zoom-in-up" className=" flex justify-center items-center ">
          <Image className="object-cover rounded-full border-4 border-yellow-500 shadow-lg shadow-amber-400 md:h-[420px] md:w-[300px] lg:h-[480px] lg:w-[320px]" src={'/my-dp.jpg'} alt="profile picture"
            height={400} width={320} />
        </div>

      </section>
    
      <About />
      <Skills />
      <Projects /> 
      <ContactUs />


    </main>
  )

}