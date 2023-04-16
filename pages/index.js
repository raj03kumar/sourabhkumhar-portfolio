import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "@/src/components";
import Head from "next/head";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}

        <div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Page;
