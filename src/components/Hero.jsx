import { motion } from "framer-motion";
import { styles } from "@/src/utils/styles";
import React from "react";
import { ComputersCanvas } from "./canvas";
import Link from "next/link";
import bg from "../assets/herobg.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <Image src={bg} alt="bg" className="absolute top-20 z-[-1]" />
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <div className={styles.heroHeadText}>
            Hi, {`I'm`} <span className="text-[#915eff]">Sourabh</span>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            Frontend Web Developer - specialized in Next.js & React.js
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <Link href="#about">
          <div className="w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
