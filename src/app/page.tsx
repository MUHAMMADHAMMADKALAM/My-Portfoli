"use client";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import ContactUs from "./contact-us/page";
import Home from "./home/page";


export default function main() {
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
    <main className=" ">
      <Home />
      <About />
      <Skills />
      <Projects /> 
      <ContactUs />

    </main>
  )
}