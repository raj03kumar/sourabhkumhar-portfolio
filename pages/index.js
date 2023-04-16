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
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    if (mediaQuery.matches) {
      alert(
        "This site may crash in mobile devices. Because of lower graphic support."
      );
    }

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero isMobile={isMobile} />
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
