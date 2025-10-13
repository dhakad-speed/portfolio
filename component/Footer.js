"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <motion.div className="w-full  min-h-[100%] bg-[#000] text-white grid">
      <div className="mx-auto container p-4">
        <div className="start-block flex flex-col gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="footer-headline lg:pt-30 md:pt-10 pt-5 lg:text-7xl md:text-5xl lg:leading-[86px] md:leading-[62px] md:text-center text-center text-[39px] leading-[48px] font-bold my-0 tracking-[-2.16px] md:w-full md:max-w-[770px] "
          >
            Let’s work together and build cool things!
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href={"/contact"}>
              <div className="w-[170px] button-block py-[16px] px-[28px] flex items-center dark:bg-[#323232] bg-[#9b36f2]  text-white  gap-2">
                <button>Get Started</button>
                <Image
                  src="https://cdn.prod.website-files.com/66dc6345d8e5c096070d8fa6/66dc647819b924db4dba0c31_Vector.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="w-auto h-auto"
                />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="flex lg:flex-row flex-col justify-around gap-4 mt-12">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 65 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="flex text-[#ffffffa3]   font-bold  flex-col md:items-center items-center  lg:items-start gap-2"
          >
            <div className="head text-white lg:font-bold uppercase font-bold">
              Main
            </div>
            <div className="text-xl">
              <motion.div
                className="relative inline-block font-semibold cursor-pointer overflow-hidden"
                initial="rest"
                whileHover="hover"
              >
                <Link className="footer-link" href={"/"}>
                  <motion.span
                    variants={{
                      rest: { y: "0%", color: "#fff" },
                      hover: {
                        y: "-100%",
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="block  footer-link"
                  >
                    Home
                  </motion.span>
                  <motion.span
                    variants={{
                      rest: { y: "100%", color: "#9b36f2" },
                      hover: {
                        y: "0%",
                        transition: { duration: 0.4, delay: 0.4 },
                      },
                    }}
                    className="absolute left-0 top-0 block "
                  >
                    Home
                  </motion.span>
                </Link>
              </motion.div>
            </div>
            <div className="text-xl">
              <motion.div
                className="relative inline-block font-semibold cursor-pointer overflow-hidden"
                initial="rest"
                whileHover="hover"
              >
                <Link className="footer-link" href={"/about"}>
                  <motion.span
                    variants={{
                      rest: { y: "0%", color: "#fff" },
                      hover: {
                        y: "-100%",
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="block  footer-link"
                  >
                    About
                  </motion.span>
                  <motion.span
                    variants={{
                      rest: { y: "100%", color: "#9b36f2" },
                      hover: {
                        y: "0%",
                        transition: { duration: 0.4, delay: 0.4 },
                      },
                    }}
                    className="absolute left-0 top-0 block  "
                  >
                    About
                  </motion.span>
                </Link>
              </motion.div>
            </div>
            <div className="text-xl">
              <motion.div
                className="relative inline-block font-semibold cursor-pointer overflow-hidden"
                initial="rest"
                whileHover="hover"
              >
                <Link className="footer-link" href={"/contact"}>
                  <motion.span
                    variants={{
                      rest: { y: "0%", color: "#fff" },
                      hover: {
                        y: "-100%",
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="block footer-link"
                  >
                    Contact
                  </motion.span>
                  <motion.span
                    variants={{
                      rest: { y: "100%", color: "#9b36f2" },
                      hover: {
                        y: "0%",
                        transition: { duration: 0.4, delay: 0.4 },
                      },
                    }}
                    className="absolute left-0 top-0 block  "
                  >
                    Contact
                  </motion.span>
                </Link>
              </motion.div>
            </div>
            <div className="text-xl">
              <motion.div
                className="relative inline-block font-semibold cursor-pointer overflow-hidden"
                initial="rest"
                whileHover="hover"
              >
                <Link className="footer-link" href={"/project"}>
                  <motion.span
                    variants={{
                      rest: { y: "0%", color: "#fff" },
                      hover: {
                        y: "-100%",
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="block  footer-link"
                  >
                    Projects
                  </motion.span>
                  <motion.span
                    variants={{
                      rest: { y: "100%", color: "#9b36f2" },
                      hover: {
                        y: "0%",
                        transition: { duration: 0.4, delay: 0.4 },
                      },
                    }}
                    className="absolute left-0 top-0 block  "
                  >
                    Projects
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 65 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex text-[#ffffffa3] font-bold flex-col md:items-center items-center lg:items-start gap-2"
          >
            <div className="head text-white lg:font-bold font-bold  uppercase">
              Follow me
            </div>
            <div className="text-xl">
              <motion.div
                className="relative inline-block font-semibold cursor-pointer overflow-hidden"
                initial="rest"
                whileHover="hover"
              >
                <Link
                  className="footer-link"
                  href={
                    "https://www.instagram.com/asedits98?utm_source=qr&igsh=b29jbDE1bHI3NXNm"
                  }
                >
                  <motion.span
                    variants={{
                      rest: { y: "0%", color: "#fff" },
                      hover: {
                        y: "-100%",
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="block footer-link"
                  >
                    Instagram
                  </motion.span>
                  <motion.span
                    variants={{
                      rest: { y: "100%", color: "#9b36f2" },
                      hover: {
                        y: "0%",
                        transition: { duration: 0.4, delay: 0.4 },
                      },
                    }}
                    className="absolute left-0 top-0 block  "
                  >
                    Instagram
                  </motion.span>
                </Link>
              </motion.div>
            </div>
            <div className="text-xl">
              <motion.div
                className="relative inline-block font-semibold cursor-pointer overflow-hidden"
                initial="rest"
                whileHover="hover"
              >
                <Link
                  className="footer-link"
                  href={
                    "https://x.com/ASEdits396560?t=cQEzdaO0nQ1a4vIzF1ozww&s=09"
                  }
                >
                  <motion.span
                    variants={{
                      rest: { y: "0%", color: "#fff" },
                      hover: {
                        y: "-100%",
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="block footer-link"
                  >
                    Twitter
                  </motion.span>
                  <motion.span
                    variants={{
                      rest: { y: "100%", color: "#9b36f2" },
                      hover: {
                        y: "0%",
                        transition: { duration: 0.4, delay: 0.4 },
                      },
                    }}
                    className="absolute left-0 top-0 block "
                  >
                    Twitter
                  </motion.span>
                </Link>
              </motion.div>
            </div>
            <div className="text-xl">
              <motion.div
                className="relative inline-block font-semibold cursor-pointer overflow-hidden"
                initial="rest"
                whileHover="hover"
              >
                <Link
                  className="footer-link"
                  href={
                    " https://www.linkedin.com/in/ayushdhakad-comp-rcti-dte-0875a0313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  }
                >
                  <motion.span
                    variants={{
                      rest: { y: "0%", color: "#fff" },
                      hover: {
                        y: "-100%",
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="block  footer-link"
                  >
                    Linkedin
                  </motion.span>
                  <motion.span
                    variants={{
                      rest: { y: "100%", color: "#9b36f2" },
                      hover: {
                        y: "0%",
                        transition: { duration: 0.4, delay: 0.4 },
                      },
                    }}
                    className="absolute left-0 top-0 block  "
                  >
                    Linkedin
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="hr h-[1px] lg:mt-20 mt-4 bg-[#727272]"></div>
        <div className="flex text-[#ffffffa3]  font-bold lg:gap-x-[390px] flex-col items-center gap-x-[50px] mt-[28px] mr-0 mb-[33px]">
          <div className="design lg:text-xl text-sm">
            Designed By{" "}
            <Link
              className="underline"
              href=" https://www.instagram.com/_karan_dhakad__"
            >
              {" "}
              Karan Dhakad
            </Link>
          </div>
          <div className="gmail lg:text-xl text-sm">2025@dhakad-speed</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
