"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="animated-container">
      <div className="global-padding">
        <div
          id="home"
          className="bg-white text-[#0c0407]  dark:bg-[#1f1f1f] dark:text-white home-wrapper"
        >
          <div className="home-container">
            <div className="hero-content-01">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                repe
                className="intro-text-wrapper"
              >
                <div className="intro-text  font-medium">
                  Hey There I&apos;m
                </div>
                <div className="intro-text-name font-bold ">Ayush Dhakad</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="current-available w-[206px] "
              >
                <div className="current-text  font-medium">
                  Currently available for freelance projects 🚀
                </div>
              </motion.div>
            </div>

            <motion.div
              className="hero-image"
              initial={{ opacity: 0, y: 20, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {" "}
              <Image
                src="https://iili.io/KEWPwTx.png"
                alt="ayush-img"
                width={498}
                height={500}
                className="ayush-img"
                priority
              />
            </motion.div>

            <div className="hero-content-02 ">
              {" "}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="skill-wrapper"
              >
                <div className="text-base text-[#666] skill-text ">
                  A passionate video editor blending creativity with
                  storytelling to craft engaging, polished content. Skilled in
                  Premiere Pro, After Effects, and DaVinci Resolve with
                  expertise in cutting, color grading, sound, and motion
                  graphics.
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="contact-btn-wrapper"
              >
                {" "}
                <Link href={"/contact"}>
                  <button
                    id="chat"
                    className=" bg-[#9b36f2] text-white dark:bg-[#323232] contact-btn "
                  >
                    Let&apos;s Chat
                  </button>
                </Link>
              </motion.div>
            </div>

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
