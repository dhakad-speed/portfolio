import React from "react";
import Image from "next/image";
import Link from "next/link";
//   <div className="footer-headline pt-30 lg:text-7xl md:text-5xl lg:leading-[86px] md:leading-[62px] md:text-center text-center text-5xl leading-[48px] font-bold my-0 tracking-[-2.16px] md:w-full md:max-w-[770px] ">
//     Let’s work together and build cool things!
//   </div>

function Footer() {
  return (
    <div className="w-full  md:min-h-screen lg:min-h-screen bg-[#000] text-white grid">
      <div className="mx-auto container p-4">
        <div className="start-block flex flex-col gap-6 items-center">
          <div className="footer-headline pt-30 lg:text-7xl md:text-5xl lg:leading-[86px] md:leading-[62px] md:text-center text-center text-5xl leading-[48px] font-bold my-0 tracking-[-2.16px] md:w-full md:max-w-[770px] ">
            Let’s work together and build cool things!
          </div>
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
        </div>

        <div className="flex flex-row justify-between gap-8 mt-12">
          {" "}
          <div className="flex text-[#ffffffa3]   font-bold  flex-col md:items-center items-center  lg:items-start gap-4">
            <div className="head text-white  lg:text-5xl lg:font-bold uppercase font-bold">
              Main
            </div>
            <div className="text-xl">Home</div>
            <div className="text-xl">About</div>
            <div className="text-xl">Contact</div>
            <div className="text-xl">Projects</div>
          </div>
          <div className="flex text-[#ffffffa3] font-bold flex-col md:items-center items-center lg:items-start gap-4">
            <div className="head text-white lg:text-5xl lg:font-bold font-bold  uppercase">
              Follow me
            </div>
            <div className="text-xl">Instagram</div>
            <div className="text-xl">Twitter</div>
            <div className="text-xl">Linkedin</div>
            <div className="text-xl">Facebook</div>
          </div>
        </div>
        <div className="hr h-[1px] mt-[80px] bg-[#333]"></div>
        <div className="flex text-[#ffffffa3]  font-bold lg:gap-x-[390px] justify-center gap-x-[50px] mt-[28px] mr-0 mb-[33px]">
          <div className="design">
            Designed By <a href=""> Karan Dhakad</a>
          </div>
          <div className="2023">2025@dhakad-speed</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
