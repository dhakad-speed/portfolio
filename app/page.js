"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div>
      <div
        id="home"
        className="bg-white text-[#0c0407] max-w-7xl  mx-auto lg:mb-[300px] px-4 sm:px-6 lg:px-8 dark:bg-[#1f1f1f] dark:text-white lg:pt-10 md:pt-4 pt-5 items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
          <div className="flex flex-col gap-y-20 lg:mr-15">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              repe
              className="intro-text-wrapper"
            >
              <div className="intro-text text-3xl font-bold">
                Hey There I&apos;m
              </div>
              <div className="intro-text-name font-bold text-3xl">
                Ayush Dhakad
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="current-available w-[206px] md:block hidden"
            >
              <div className="current-text text-base ">
                Currently available for freelance projects 🚀
              </div>
            </motion.div>
          </div>
          <div className="rounded mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {" "}
              <Image
                src="https://iili.io/KEWPwTx.png"
                alt="ayush-img"
                width={500}
                height={500}
                className="object-contain ayush-img rounded-full dark:border dark:border-transparent border border-black"
                priority
              />
            </motion.div>
          </div>
          <div className="flex lg:flex-col lg:gap-y-20 lg:ml-15 mt-10 md:flex-row md:gap-x-  flex-col  justify-center skill-element">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="skill-wrapper  "
            >
              <div className="skill-text  font-bold ">
                A passionate video editor blending creativity with storytelling
                to craft engaging, polished content. Skilled in Premiere Pro,
                After Effects, and DaVinci Resolve with expertise in cutting,
                color grading, sound, and motion graphics.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {" "}
              <Link href={"/contact"}>
                <div className="flex  justify-self-center pb-5 lg:mt-[-70px] ">
                  <button
                    id="chat"
                    className="rounded-full w-[146px] h-[146px] bg-[#9b36f2] text-white dark:bg-[#323232] uppercase"
                  >
                    Let&apos;s Chat
                  </button>
                </div>
              </Link>
            </motion.div>
          </div>
          <div className="flex justify-self-center">
            <div className="hero-headline-block absolute">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="hero-headline  uppercase"
              >
                video editor
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
